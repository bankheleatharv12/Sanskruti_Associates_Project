import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Briefcase, Building2, Check, CheckCircle2, Globe, MapPin, MessageCircle, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';

const steps = ['Study Details','Student Info','Course Details','Co-applicant','Mobile Verify','Documents','Review & Submit'];

const indianStates = ['Maharashtra','Karnataka','Tamil Nadu','Delhi','Uttar Pradesh','Gujarat','Rajasthan','West Bengal','Madhya Pradesh','Telangana','Andhra Pradesh','Kerala','Punjab','Haryana','Bihar','Other'];
const abroadCountries = ['USA','UK','Canada','Australia','Germany','Singapore','New Zealand','Ireland','France','Netherlands','Other'];
const courseLevels = ['Undergraduate (UG)','Postgraduate (PG)','Diploma / Certificate','PhD / Research','Professional (CA/CS/CMA)','Vocational / Skill'];
const loanPurposes = ['Tuition Fees','Hostel / Accommodation','Books & Stationery','Laptop / Equipment','Travel Expenses','Exam & Library Fees','Other Expenses'];

function Styles(){return(<style>{`
@keyframes loanStepIn{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
@keyframes loanFadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
@keyframes successCircle{from{stroke-dashoffset:240}to{stroke-dashoffset:0}}
@keyframes successCheck{from{stroke-dashoffset:70}to{stroke-dashoffset:0}}
`}</style>);}

function ProgressBar({currentStep}:{currentStep:number}){
return(<div className="mb-8 rounded-[24px] border border-white/95 bg-white/90 p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px]">
<div className="grid grid-cols-4 gap-y-6 lg:grid-cols-7 lg:gap-y-0">
{steps.map((step,index)=>{const n=index+1;const done=n<currentStep;const active=n===currentStep;
return(<div key={step} className="relative flex flex-col items-center text-center">
{index<steps.length-1&&<div className={`absolute left-1/2 top-5 hidden h-0.5 w-full lg:block ${done?'bg-[#16A34A]':'border-t border-dashed border-gray-300'}`}/>}
<div className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300 ${done?'bg-[#16A34A] text-white shadow-lg shadow-green-500/25':active?'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30 ring-8 ring-[#2563EB]/15 animate-pulse':'border-2 border-gray-300 bg-white text-gray-400'}`}>
{done?<Check className="h-5 w-5"/>:n}</div>
<span className={`mt-3 text-xs transition-colors duration-300 ${active?'text-[#1F2937] font-medium':done?'text-[#16A34A]':'text-gray-500'}`}>{step}</span>
</div>);})}
</div></div>);}

function Field({label,children}:{label:string;children:React.ReactNode}){
return(<label className="group relative block pt-2">
<span className="mb-2 block text-sm text-[#374151] transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-[#2563EB]">{label}</span>
<div className="relative">{children}<span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-[#2563EB] transition-all duration-300 group-focus-within:w-full"/></div>
</label>);}

function TI({value,onChange,type='text',placeholder=''}:any){
return(<div className="relative">
<input type={type} value={value} placeholder={placeholder} onChange={e=>onChange(e.target.value)}
className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 pr-11 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"/>
{value?<CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#16A34A]"/>:null}
</div>);}

function UB({doc,fileName,onUpload}:any){const id=`upload-${doc.key}`;
return(<label htmlFor={id} className={`group flex min-h-[176px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-5 text-center transition-all duration-300 ${fileName?'border-[#16A34A] bg-green-50/80 shadow-lg shadow-green-500/10':'border-dashed border-[#2563EB] bg-white/80 hover:border-solid hover:bg-blue-50'}`}>
<input id={id} type="file" className="hidden" onChange={e=>onUpload(doc.key,e.target.files?.[0])}/>
<div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${fileName?'bg-[#16A34A] text-white':'bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white'}`}>
{fileName?<CheckCircle2 className="h-7 w-7"/>:<Upload className="h-7 w-7"/>}</div>
<span className="mb-2 text-sm text-[#1F2937]">{doc.label}</span>
<span className={`mb-3 rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-wider ${doc.required?'bg-red-50 text-red-600':'bg-gray-100 text-gray-600'}`}>{doc.required?'* Required':'Optional'}</span>
<span className={`break-all text-xs ${fileName?'text-[#16A34A] font-medium':'text-gray-500'}`}>{fileName||'Click to browse'}</span>
</label>);}

const sel="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10";

export default function EducationLoanForm(){
const navigate=useNavigate();
const[currentStep,setCurrentStep]=useState(1);
const[studyDestination,setStudyDestination]=useState<'india'|'abroad'|''>('');
const[courseLevel,setCourseLevel]=useState('');
const[coApplicantType,setCoApplicantType]=useState<'salaried'|'self-employed'|''>('');
const[formData,setFormData]=useState({
studentName:'',dob:'',gender:'',email:'',city:'',pinCode:'',aadhaarNumber:'',indianCitizen:'yes',
academicStatus:'',tenthScore:'',twelfthScore:'',graduationScore:'',entranceCleared:'no',examName:'',examScore:'',
courseName:'',collegeName:'',country:'',state:'',admissionStatus:'',courseStartDate:'',courseDuration:'',
totalCourseFee:'',loanAmount:1000000,loanPurposes:[] as string[],
coName:'',coRelation:'',coDob:'',coPan:'',coAadhaar:'',coAddress:'',coCity:'',coPinCode:'',
employerName:'',monthlySalary:'',workExperience:'',
businessName:'',annualTurnover:'',businessVintage:'',
bankStatementPeriod:'',creditScore:'',mobileNumber:'',
});
const[otpSent,setOtpSent]=useState(false);
const[otp,setOtp]=useState(['','','','','','']);
const[mobileVerified,setMobileVerified]=useState(false);
const[uploadedFiles,setUploadedFiles]=useState<Record<string,string>>({});
const[termsAccepted,setTermsAccepted]=useState(false);
const[submitted,setSubmitted]=useState(false);

const u=(f:string,v:any)=>setFormData(c=>({...c,[f]:v}));
const goNext=()=>{if(currentStep<steps.length){setCurrentStep(s=>s+1);window.scrollTo({top:0,behavior:'smooth'});}};
const goPrev=()=>{if(currentStep>1){setCurrentStep(s=>s-1);window.scrollTo({top:0,behavior:'smooth'});}};
const handleOtp=(i:number,v:string)=>{const d=v.replace(/\D/g,'').slice(0,1);const n=[...otp];n[i]=d;setOtp(n);
if(d&&i<5)document.getElementById(`edu-otp-${i+1}`)?.focus();
if(n.every(x=>x!==''))setTimeout(()=>setMobileVerified(true),300);};
const handleUpload=(k:string,f?:File)=>{if(!f)return;setUploadedFiles(c=>({...c,[k]:f.name}));};
const togglePurpose=(p:string)=>{const cur=formData.loanPurposes;u('loanPurposes',cur.includes(p)?cur.filter(x=>x!==p):[...cur,p]);};

const studentDocs=[
{key:'student-photo',label:'Passport-size Photo',required:true},
{key:'student-aadhaar',label:'Aadhaar Card',required:true},
{key:'student-address',label:'Address Proof',required:true},
{key:'student-dob-proof',label:'Date of Birth Proof',required:true},
{key:'10th-marksheet',label:'10th Marksheet',required:true},
{key:'12th-marksheet',label:'12th Marksheet',required:true},
{key:'grad-marksheet',label:'Graduation Marksheet',required:courseLevel==='Postgraduate (PG)'},
{key:'entrance-scorecard',label:'Entrance Exam Scorecard',required:false},
{key:'admission-letter',label:'Admission / Offer Letter',required:true},
{key:'fee-structure',label:'Fee Structure from Institute',required:true},
{key:'passport',label:'Passport (Abroad)',required:false},
];
const coSalariedDocs=[
{key:'co-photo',label:'Co-applicant Photo',required:true},
{key:'co-pan',label:'Co-applicant PAN Card',required:true},
{key:'co-aadhaar',label:'Co-applicant Aadhaar Card',required:true},
{key:'co-address',label:'Address Proof',required:true},
{key:'co-salary',label:'Salary Slips — Last 3 Months',required:true},
{key:'co-form16',label:'Form 16 — Last 2 Years',required:true},
{key:'co-bank',label:'Bank Statements — Last 6–12 Months',required:true},
{key:'co-office',label:'Office ID / Employment Proof',required:true},
];
const coSelfDocs=[
{key:'co-photo',label:'Co-applicant Photo',required:true},
{key:'co-pan',label:'Co-applicant PAN Card',required:true},
{key:'co-aadhaar',label:'Co-applicant Aadhaar Card',required:true},
{key:'co-address',label:'Address Proof',required:true},
{key:'co-itr',label:'ITR — Last 2–3 Years',required:true},
{key:'co-bank',label:'Bank Statements — Last 12 Months',required:true},
{key:'co-gst',label:'GST Registration',required:true},
{key:'co-biz',label:'Business Proof',required:true},
];
const collateralDocs=[
{key:'property-papers',label:'Property Papers / Title Deed',required:false},
{key:'fd-proof',label:'Fixed Deposit Proof',required:false},
{key:'property-insurance',label:'Property Insurance',required:false},
];

const submitApp=()=>{if(!termsAccepted)return;
const end=Date.now()+3000;const frame=()=>{
confetti({particleCount:5,angle:60,spread:55,origin:{x:0},colors:['#2563EB','#16A34A','#FCD34D']});
confetti({particleCount:5,angle:120,spread:55,origin:{x:1},colors:['#2563EB','#16A34A','#FCD34D']});
if(Date.now()<end)requestAnimationFrame(frame);};frame();setSubmitted(true);};

if(submitted){
return(<div className="relative min-h-screen overflow-hidden py-16"><Styles/>
<div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90"/></div>
<div className="relative z-10 mx-auto max-w-2xl px-4">
<div className="rounded-[24px] border border-white/95 bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-10 [animation:loanFadeUp_0.6s_ease-out_both]">
<svg className="mx-auto mb-5 h-24 w-24" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="38" fill="none" stroke="#16A34A" strokeWidth="7" strokeDasharray="240" strokeDashoffset="240" className="[animation:successCircle_0.8s_ease-out_forwards]"/>
<path d="M32 51 L45 64 L70 36" fill="none" stroke="#16A34A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="70" strokeDashoffset="70" className="[animation:successCheck_0.55s_ease-out_0.65s_forwards]"/>
</svg>
<h1 className="mb-3 text-3xl font-bold text-[#1F2937] [animation:loanFadeUp_0.5s_ease-out_0.15s_both]">Application Submitted Successfully! 🎉</h1>
<p className="mb-2 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.25s_both]">Application ID</p>
<p className="mb-5 text-3xl font-bold text-[#2563EB] [animation:loanFadeUp_0.5s_ease-out_0.35s_both]">SA-EL-{Math.floor(10000000+Math.random()*90000000)}</p>
<p className="mb-8 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.45s_both]">Our education loan expert will contact you within 24 hours. We will match you with the best lender for your course and profile.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center [animation:loanFadeUp_0.5s_ease-out_0.55s_both]">
<a href="https://wa.me/917758969798" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#15803D] active:scale-[0.97]"><MessageCircle className="h-5 w-5"/>Chat with Our Expert</a>
<button onClick={()=>navigate('/')} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2563EB] px-8 py-4 text-[#2563EB] transition-all duration-300 hover:bg-blue-50 active:scale-[0.97]">Go to Home</button>
</div></div></div></div>);}

return(<div className="relative min-h-screen overflow-hidden py-12"><Styles/>
<div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/80 to-white/90"/></div>
<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<ProgressBar currentStep={currentStep}/>
<div className="mx-auto rounded-[24px] border border-white/95 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-8">

{currentStep===1&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<h1 className="mb-2 text-2xl font-bold text-[#1F2937] sm:text-3xl">Where do you want to study?</h1>
<p className="mb-8 text-gray-600">This helps us show relevant lender options for you</p>
<div className="space-y-8">
<div><h2 className="text-lg font-medium mb-4 text-[#1F2937]">Study Destination</h2>
<div className="grid gap-4 md:grid-cols-2">
<button onClick={()=>setStudyDestination('india')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${studyDestination==='india'?'border-[#2563EB] bg-blue-50 shadow-md':'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
<div className={`flex h-14 w-14 items-center justify-center rounded-full ${studyDestination==='india'?'bg-[#2563EB] text-white':'bg-blue-100 text-[#2563EB]'}`}><MapPin className="h-7 w-7"/></div>
<div><h3 className="font-semibold text-[#1F2937] text-lg">Study in India</h3><p className="text-sm text-gray-500">Indian universities and colleges</p></div>
{studyDestination==='india'&&<CheckCircle2 className="ml-auto h-6 w-6 text-[#2563EB]"/>}</button>
<button onClick={()=>setStudyDestination('abroad')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${studyDestination==='abroad'?'border-[#16A34A] bg-green-50 shadow-md':'border-gray-200 bg-white hover:border-[#16A34A]/50'}`}>
<div className={`flex h-14 w-14 items-center justify-center rounded-full ${studyDestination==='abroad'?'bg-[#16A34A] text-white':'bg-green-100 text-[#16A34A]'}`}><Globe className="h-7 w-7"/></div>
<div><h3 className="font-semibold text-[#1F2937] text-lg">Study Abroad</h3><p className="text-sm text-gray-500">International universities</p></div>
{studyDestination==='abroad'&&<CheckCircle2 className="ml-auto h-6 w-6 text-[#16A34A]"/>}</button>
</div></div>
{studyDestination&&(<div className="[animation:loanFadeUp_0.4s_ease-out_both]">
<h2 className="text-lg font-medium mb-4 text-[#1F2937]">Course Level</h2>
<div className="flex flex-wrap gap-3">{courseLevels.map(cl=>(<button key={cl} onClick={()=>setCourseLevel(cl)}
className={`rounded-full border-2 px-5 py-2.5 text-sm font-medium transition-all duration-300 ${courseLevel===cl?'border-[#2563EB] bg-[#2563EB] text-white shadow-md':'border-gray-200 bg-white text-[#1F2937] hover:border-[#2563EB]/50'}`}>{cl}</button>))}</div>
</div>)}</div>
{studyDestination&&courseLevel&&(<div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 [animation:loanFadeUp_0.4s_ease-out_both]">
<div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"><CheckCircle2 className="h-4 w-4"/>{studyDestination==='india'?'India':'Abroad'} — {courseLevel}</div>
<button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
</div>)}</div>)}

{currentStep===2&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<h1 className="mb-6 text-2xl font-bold text-[#1F2937] sm:text-3xl">Student Details</h1>
<div className="grid gap-5 md:grid-cols-2 mb-8">
<Field label="Student Full Name *"><TI value={formData.studentName} onChange={(v:string)=>u('studentName',v)}/></Field>
<Field label="Date of Birth *"><TI type="date" value={formData.dob} onChange={(v:string)=>u('dob',v)}/></Field>
<Field label="Gender *"><select value={formData.gender} onChange={e=>u('gender',e.target.value)} className={sel}><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></Field>
<Field label="Email ID *"><TI type="email" value={formData.email} onChange={(v:string)=>u('email',v)}/></Field>
<Field label="City *"><TI value={formData.city} onChange={(v:string)=>u('city',v)}/></Field>
<Field label="PIN Code *"><TI value={formData.pinCode} onChange={(v:string)=>u('pinCode',v)}/></Field>
<Field label="Aadhaar Number *"><TI value={formData.aadhaarNumber} onChange={(v:string)=>u('aadhaarNumber',v)}/></Field>
<Field label="Indian Citizen? *"><div className="flex gap-3">{['Yes','No'].map(o=>(<button key={o} onClick={()=>u('indianCitizen',o.toLowerCase())} className={`flex-1 rounded-xl border-2 py-3 text-center font-medium transition-all ${formData.indianCitizen===o.toLowerCase()?'border-[#2563EB] bg-blue-50 text-[#2563EB]':'border-gray-200 text-gray-600 hover:border-[#2563EB]/50'}`}>{o}</button>))}</div></Field>
<Field label="Current Academic Status *"><select value={formData.academicStatus} onChange={e=>u('academicStatus',e.target.value)} className={sel}><option value="">Select</option><option>Just Appeared in Exam</option><option>Awaiting Admission</option><option>Admission Confirmed</option><option>Already Studying</option></select></Field>
<Field label="10th Percentage / CGPA *"><TI value={formData.tenthScore} onChange={(v:string)=>u('tenthScore',v)}/></Field>
{(courseLevel.includes('UG')||courseLevel.includes('Diploma')||courseLevel.includes('Professional')||courseLevel.includes('Vocational'))&&<Field label="12th Percentage / CGPA *"><TI value={formData.twelfthScore} onChange={(v:string)=>u('twelfthScore',v)}/></Field>}
{courseLevel.includes('PG')&&<Field label="Graduation Percentage / CGPA"><TI value={formData.graduationScore} onChange={(v:string)=>u('graduationScore',v)}/></Field>}
<Field label="Entrance Exam Cleared?"><div className="flex gap-3">{['Yes','No'].map(o=>(<button key={o} onClick={()=>u('entranceCleared',o.toLowerCase())} className={`flex-1 rounded-xl border-2 py-3 text-center font-medium transition-all ${formData.entranceCleared===o.toLowerCase()?'border-[#2563EB] bg-blue-50 text-[#2563EB]':'border-gray-200 text-gray-600 hover:border-[#2563EB]/50'}`}>{o}</button>))}</div></Field>
{formData.entranceCleared==='yes'&&<><Field label="Exam Name"><TI value={formData.examName} onChange={(v:string)=>u('examName',v)} placeholder="JEE / NEET / CAT / GRE / GMAT"/></Field>
<Field label="Exam Score"><TI value={formData.examScore} onChange={(v:string)=>u('examScore',v)}/></Field></>}
</div>
<div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
<button onClick={goPrev} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
<button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
</div></div>)}

{currentStep===3&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<div className="flex items-center gap-3 mb-6"><h1 className="text-2xl font-bold text-[#1F2937] sm:text-3xl">Course Details</h1>
<span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[#2563EB]">{studyDestination==='india'?'India':'Abroad'} — {courseLevel}</span></div>
<div className="grid gap-5 md:grid-cols-2 mb-8">
<Field label="Course Name *"><TI value={formData.courseName} onChange={(v:string)=>u('courseName',v)}/></Field>
<Field label="College / University Name *"><TI value={formData.collegeName} onChange={(v:string)=>u('collegeName',v)}/></Field>
{studyDestination==='abroad'?<Field label="Country *"><select value={formData.country} onChange={e=>u('country',e.target.value)} className={sel}><option value="">Select country</option>{abroadCountries.map(c=><option key={c}>{c}</option>)}</select></Field>
:<Field label="State *"><select value={formData.state} onChange={e=>u('state',e.target.value)} className={sel}><option value="">Select state</option>{indianStates.map(s=><option key={s}>{s}</option>)}</select></Field>}
<Field label="Admission Status *"><select value={formData.admissionStatus} onChange={e=>u('admissionStatus',e.target.value)} className={sel}><option value="">Select</option><option>Awaiting Result</option><option>Offer Letter Received</option><option>Admission Confirmed</option><option>Already Enrolled</option></select></Field>
<Field label="Course Start Date *"><TI type="date" value={formData.courseStartDate} onChange={(v:string)=>u('courseStartDate',v)}/></Field>
<Field label="Course Duration *"><select value={formData.courseDuration} onChange={e=>u('courseDuration',e.target.value)} className={sel}><option value="">Select</option>{[1,2,3,4,5,6].map(y=><option key={y} value={y}>{y} Year{y>1?'s':''}</option>)}</select></Field>
<Field label="Total Course Fee (₹) *"><TI type="number" value={formData.totalCourseFee} onChange={(v:string)=>u('totalCourseFee',v)}/></Field>
</div>
<Field label={`Loan Amount Required: ₹ ${Number(formData.loanAmount).toLocaleString('en-IN')}`}>
<input type="range" min="50000" max="7500000" step="50000" value={formData.loanAmount} onChange={e=>u('loanAmount',Number(e.target.value))} className="h-2 w-full appearance-none rounded-full bg-blue-100 accent-[#2563EB]"/>
<div className="mt-1 flex justify-between text-xs text-gray-500"><span>₹50,000</span><span>₹75,00,000</span></div></Field>
<div className="mt-6"><p className="mb-3 text-sm font-medium text-[#374151]">Loan Purpose (select all that apply)</p>
<div className="flex flex-wrap gap-3">{loanPurposes.map(p=>(<button key={p} onClick={()=>togglePurpose(p)} className={`rounded-xl border-2 px-4 py-2.5 text-sm transition-all ${formData.loanPurposes.includes(p)?'border-[#2563EB] bg-blue-50 text-[#2563EB] font-medium':'border-gray-200 text-gray-600 hover:border-[#2563EB]/50'}`}>{formData.loanPurposes.includes(p)?'✓ ':''}{p}</button>))}</div></div>
<div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
<button onClick={goPrev} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
<button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
</div></div>)}

{currentStep===4&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<h1 className="mb-2 text-2xl font-bold text-[#1F2937] sm:text-3xl">Co-applicant Details</h1>
<p className="mb-6 text-gray-600">Parent or guardian co-applicant is required in most cases</p>
<div className="mb-8 rounded-2xl border-2 border-[#2563EB]/20 bg-blue-50/60 p-4 text-sm text-[#1F2937]">Co-applicant's income is the primary factor for loan approval and interest rate</div>
<div className="grid gap-5 md:grid-cols-2 mb-8">
<Field label="Co-applicant Full Name *"><TI value={formData.coName} onChange={(v:string)=>u('coName',v)}/></Field>
<Field label="Relationship with Student *"><select value={formData.coRelation} onChange={e=>u('coRelation',e.target.value)} className={sel}><option value="">Select</option><option>Father</option><option>Mother</option><option>Spouse</option><option>Sibling</option><option>Guardian</option><option>Other</option></select></Field>
<Field label="Date of Birth *"><TI type="date" value={formData.coDob} onChange={(v:string)=>u('coDob',v)}/></Field>
<Field label="PAN Card Number *"><TI value={formData.coPan} onChange={(v:string)=>u('coPan',v.toUpperCase())}/></Field>
<Field label="Aadhaar Number *"><TI value={formData.coAadhaar} onChange={(v:string)=>u('coAadhaar',v)}/></Field>
<div className="md:col-span-2"><Field label="Current Address *"><textarea value={formData.coAddress} onChange={e=>u('coAddress',e.target.value)} className="min-h-[100px] w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"/></Field></div>
<Field label="City *"><TI value={formData.coCity} onChange={(v:string)=>u('coCity',v)}/></Field>
<Field label="PIN Code *"><TI value={formData.coPinCode} onChange={(v:string)=>u('coPinCode',v)}/></Field>
</div>
<h2 className="text-lg font-medium mb-4 text-[#1F2937]">Employment Type</h2>
<div className="grid gap-4 md:grid-cols-2 mb-8">
<button onClick={()=>setCoApplicantType('salaried')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${coApplicantType==='salaried'?'border-[#2563EB] bg-blue-50 shadow-md':'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
<div className={`flex h-12 w-12 items-center justify-center rounded-full ${coApplicantType==='salaried'?'bg-[#2563EB] text-white':'bg-blue-100 text-[#2563EB]'}`}><Briefcase className="h-6 w-6"/></div>
<div><h3 className="font-semibold text-[#1F2937]">Salaried</h3><p className="text-sm text-gray-500">Govt or private employee</p></div>
{coApplicantType==='salaried'&&<CheckCircle2 className="ml-auto h-6 w-6 text-[#2563EB]"/>}</button>
<button onClick={()=>setCoApplicantType('self-employed')} className={`flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 ${coApplicantType==='self-employed'?'border-[#2563EB] bg-blue-50 shadow-md':'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
<div className={`flex h-12 w-12 items-center justify-center rounded-full ${coApplicantType==='self-employed'?'bg-[#2563EB] text-white':'bg-blue-100 text-[#2563EB]'}`}><Building2 className="h-6 w-6"/></div>
<div><h3 className="font-semibold text-[#1F2937]">Self Employed</h3><p className="text-sm text-gray-500">Business owner or professional</p></div>
{coApplicantType==='self-employed'&&<CheckCircle2 className="ml-auto h-6 w-6 text-[#2563EB]"/>}</button>
</div>
{coApplicantType&&(<div className="[animation:loanFadeUp_0.4s_ease-out_both]">
<div className="grid gap-5 md:grid-cols-2 mb-6">
{coApplicantType==='salaried'?(<>
<Field label="Employer Name *"><TI value={formData.employerName} onChange={(v:string)=>u('employerName',v)}/></Field>
<Field label="Monthly Salary (₹) *"><TI type="number" value={formData.monthlySalary} onChange={(v:string)=>u('monthlySalary',v)}/></Field>
<Field label="Work Experience (years) *"><TI type="number" value={formData.workExperience} onChange={(v:string)=>u('workExperience',v)}/></Field>
</>):(<>
<Field label="Business Name *"><TI value={formData.businessName} onChange={(v:string)=>u('businessName',v)}/></Field>
<Field label="Annual Turnover (₹) *"><TI type="number" value={formData.annualTurnover} onChange={(v:string)=>u('annualTurnover',v)}/></Field>
<Field label="Business Vintage (years) *"><TI type="number" value={formData.businessVintage} onChange={(v:string)=>u('businessVintage',v)}/></Field>
</>)}
<Field label="Bank Statement Period Available"><select value={formData.bankStatementPeriod} onChange={e=>u('bankStatementPeriod',e.target.value)} className={sel}><option value="">Select</option><option>6 months</option><option>12 months</option><option>2 years</option></select></Field>
<Field label="Approximate Credit Score"><select value={formData.creditScore} onChange={e=>u('creditScore',e.target.value)} className={sel}><option value="">Select</option><option>Excellent (750+)</option><option>Good (700–750)</option><option>Average (650–700)</option><option>Below 650</option><option>Not Sure</option></select></Field>
</div></div>)}
<div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
<button onClick={goPrev} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
<button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
</div></div>)}

{currentStep===5&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<h1 className="mb-6 text-2xl font-bold text-[#1F2937] sm:text-3xl">Verify Your Mobile Number</h1>
<div className="max-w-xl">
<Field label="Mobile Number"><div className="flex">
<span className="rounded-l-xl border border-r-0 border-gray-200 bg-blue-50 px-4 py-3 text-[#1F2937] font-medium">+91</span>
<input type="tel" maxLength={10} value={formData.mobileNumber} onChange={e=>u('mobileNumber',e.target.value.replace(/\D/g,''))} className="w-full rounded-r-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] font-medium tracking-wide shadow-sm transition-all focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"/>
</div></Field>
<button onClick={()=>setOtpSent(true)} className="mt-5 rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Send OTP</button>
{otpSent&&(<div className="mt-8 [animation:loanFadeUp_0.35s_ease-out_both]">
<div className="mb-5 flex gap-3">{otp.map((digit,i)=>(
<input key={i} id={`edu-otp-${i}`} type="text" maxLength={1} value={digit} onChange={e=>handleOtp(i,e.target.value)}
className={`h-[60px] w-[50px] border-0 border-b-4 bg-transparent text-center text-2xl font-bold text-[#1F2937] outline-none transition-all duration-300 ${mobileVerified?'border-[#16A34A]':digit?'border-[#2563EB]':'border-gray-300 focus:border-[#2563EB]'}`}/>))}</div>
<div className="flex items-center gap-4">
<button onClick={()=>setMobileVerified(true)} className={`rounded-xl px-8 py-3 text-white shadow-md transition-all active:scale-95 ${mobileVerified?'bg-[#16A34A] pointer-events-none':'bg-gradient-to-r from-[#16A34A] to-[#22C55E] hover:brightness-110'}`}>{mobileVerified?'Verified':'Verify'}</button>
{!mobileVerified&&<button onClick={()=>setOtp(['','','','','',''])} className="text-[#2563EB] font-medium hover:underline">Resend OTP</button>}
</div></div>)}</div>
<div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
<button onClick={goPrev} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
{mobileVerified&&<button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>}
</div></div>)}

{currentStep===6&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<h1 className="mb-2 text-2xl font-bold text-[#1F2937] sm:text-3xl">Upload Documents</h1>
<p className="mb-8 text-gray-600">Upload required documents for your education loan application</p>
<div className="space-y-8">
<div className="rounded-2xl border p-6 text-[#2563EB] border-[#2563EB]/20 bg-blue-50">
<h2 className="mb-4 text-lg font-semibold">Student Documents</h2>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{studentDocs.map(d=><UB key={d.key} doc={d} fileName={uploadedFiles[d.key]} onUpload={handleUpload}/>)}</div></div>
<div className="rounded-2xl border p-6 text-[#16A34A] border-[#16A34A]/20 bg-green-50">
<h2 className="mb-4 text-lg font-semibold">Co-applicant Documents</h2>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{(coApplicantType==='salaried'?coSalariedDocs:coSelfDocs).map(d=><UB key={d.key} doc={d} fileName={uploadedFiles[d.key]} onUpload={handleUpload}/>)}</div></div>
<div className="rounded-2xl border p-6 text-[#F97316] border-[#F97316]/20 bg-orange-50">
<h2 className="mb-4 text-lg font-semibold">Collateral Documents</h2>
<p className="mb-4 text-sm text-gray-600">Upload if applying for secured loan</p>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{collateralDocs.map(d=><UB key={d.key} doc={d} fileName={uploadedFiles[d.key]} onUpload={handleUpload}/>)}</div></div>
</div>
<div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
<button onClick={goPrev} className="rounded-xl border border-gray-300 px-8 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95">Previous</button>
<button onClick={goNext} className="rounded-xl bg-[#2563EB] px-8 py-3 text-white transition-all hover:bg-[#1E40AF] active:scale-95 shadow-md">Next Step</button>
</div></div>)}

{currentStep===7&&(<div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
<h1 className="mb-6 text-2xl font-bold text-[#1F2937] sm:text-3xl">Review & Submit</h1>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Loan Type</p><p className="font-semibold text-[#1F2937]">Education Loan</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Study Destination</p><p className="font-semibold text-[#1F2937]">{studyDestination==='india'?'India':'Abroad'}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Course Level</p><p className="font-semibold text-[#1F2937]">{courseLevel}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Course Name</p><p className="font-semibold text-[#1F2937]">{formData.courseName||'-'}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">College / University</p><p className="font-semibold text-[#1F2937]">{formData.collegeName||'-'}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Total Course Fee</p><p className="font-bold text-[#2563EB] text-xl">₹ {formData.totalCourseFee?Number(formData.totalCourseFee).toLocaleString('en-IN'):'-'}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Loan Amount</p><p className="font-bold text-[#2563EB] text-xl">₹ {Number(formData.loanAmount).toLocaleString('en-IN')}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Student Name</p><p className="font-semibold text-[#1F2937]">{formData.studentName||'-'}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Co-applicant</p><p className="font-semibold text-[#1F2937]">{formData.coName||'-'}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Co-applicant Income</p><p className="font-semibold text-[#1F2937]">{coApplicantType==='salaried'?(formData.monthlySalary?`₹ ${Number(formData.monthlySalary).toLocaleString('en-IN')}/mo`:'-'):(formData.annualTurnover?`₹ ${Number(formData.annualTurnover).toLocaleString('en-IN')}/yr`:'-')}</p></div>
<div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm"><p className="text-sm text-gray-500 mb-1">Documents</p><p className="font-medium text-[#16A34A]">{Object.keys(uploadedFiles).length} Uploaded</p></div>
</div>
<div className="mt-8 border-t border-gray-200 pt-6">
<label className="flex items-start gap-3 mb-6 cursor-pointer">
<input type="checkbox" checked={termsAccepted} onChange={e=>setTermsAccepted(e.target.checked)} className="mt-1 h-5 w-5 accent-[#16A34A] rounded border-gray-300"/>
<span className="text-sm text-gray-600">I hereby declare that the information provided is true and correct. I authorize Sanskruti Associates and its banking partners to verify my details, fetch my credit report, and contact me via call/SMS/WhatsApp regarding this application.</span>
</label>
<div className="flex flex-col sm:flex-row gap-4">
<button onClick={goPrev} className="rounded-xl border border-gray-300 px-8 py-4 font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-95 sm:w-auto w-full">Previous</button>
<button disabled={!termsAccepted} onClick={submitApp} className="flex-1 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">Submit Education Loan Application</button>
</div></div></div>)}

</div></div></div>);}
