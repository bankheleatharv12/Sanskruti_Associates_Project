Create a new "Loan Status Update" page for Admin CRM 
panel with these requirements:

OVERALL STYLE:
- Same dark navy sidebar as Admin Dashboard
- Background: #F8FAFC (light gray)
- Primary color: #2563EB (blue)
- Accent color: #16A34A (green)
- Card style: white background, rounded 16px,
  subtle shadow

LAYOUT:
- Same left sidebar as Admin Dashboard
- Top header bar
- Two column layout:
  Left column: 60% width (status + logs)
  Right column: 40% width (actions + notifications)

TOP HEADER BAR:
- Back button: "← Back to Lead Details" (blue link)
- Page title: "Loan Status Update"
- Applicant name: "Rahul Sharma — Home Loan ₹45,00,000"
- Current status badge: "Sent to Bank" (blue badge)
- Last updated: "Updated: 05 Jun 2025 by Admin Suresh"

LEFT COLUMN SECTIONS:

SECTION 1 - CURRENT STATUS DISPLAY:
- Section heading: "Current Loan Status"
- White card showing full status pipeline:
  Step 1: New Lead — ✅ green
  Step 2: Documents Collected — ✅ green
  Step 3: Verification Done — ✅ green
  Step 4: Sent to Bank — 🔄 blue (current active)
  Step 5: Bank Processing — ⏳ gray
  Step 6: Loan Sanctioned — ⏳ gray
  Step 7: Amount Disbursed — ⏳ gray
  Step 8: Case Closed — ⏳ gray
- Horizontal step progress bar at top
- Each step: icon + label + date if completed
- Current step: pulsing blue animated dot
- Completed steps: green checkmark
- Pending steps: gray circle
- Below pipeline show:
  Days in Current Status: 3 Days (orange text)
  Expected Completion: 12 Jun 2025

SECTION 2 - STATUS CHANGE DROPDOWN:
- Section heading: "Update Loan Status"
- White card with:
  Large dropdown: "Select New Status"
  Options in dropdown:
    🆕 New Lead
    📋 Documents Pending
    🔍 Under Verification
    🏦 Sent to Bank
    ⚙️ Bank Processing
    ✅ Loan Sanctioned
    💰 Amount Disbursed
    ❌ Rejected
    🔒 Case Closed
  Reason field (text area):
    Label: "Reason for Status Change"
    Placeholder: "Enter reason or remarks..."
  Date field: "Effective Date" (date picker)
  Update Status button: full width green #16A34A
  Warning text below button:
    "⚠️ This will notify the applicant via 
    SMS and Email automatically"

SECTION 3 - BANK COMMUNICATION LOG:
- Section heading: "Bank Communication Log"
- White card with communication entries:
  Entry 1:
    Date: 05 Jun 2025
    Type: 📤 Sent (blue badge)
    Message: "Application documents submitted 
    to HDFC Pune branch"
    By: Admin Suresh
  Entry 2:
    Date: 06 Jun 2025
    Type: 📥 Received (green badge)
    Message: "Bank acknowledged receipt, 
    assigned ref: HDFC/2025/45678"
    By: System
  Entry 3:
    Date: 07 Jun 2025
    Type: 📞 Call (orange badge)
    Message: "Called loan officer Mr. Anil Patil,
    processing in progress"
    By: Agent Priya
- Each entry: date + type badge + message + author
- Add new communication entry at bottom:
  Type dropdown: Sent / Received / Call / Email / Visit
  Message text area
  Add Entry button (blue)

SECTION 4 - STATUS HISTORY LOG:
- Section heading: "Status History"
- White card with timeline list:
  🔵 Sent to Bank — 05 Jun 2025 10:30 AM
     Changed by: Admin Suresh
     Reason: All documents verified and complete
  🟢 Under Verification — 03 Jun 2025 02:15 PM
     Changed by: Admin Priya
     Reason: Documents received from client
  🟢 Documents Pending — 02 Jun 2025 11:00 AM
     Changed by: System
     Reason: Application submitted by client
  🟢 New Lead — 01 Jun 2025 09:00 AM
     Changed by: System
     Reason: New application received
- Each entry: colored dot + status name + 
  date/time + changed by + reason
- Most recent at top
- Alternating light gray background rows

RIGHT COLUMN SECTIONS:

SECTION 5 - SMS / EMAIL NOTIFICATION TRIGGER:
- Section heading: "Send Notification"
- White card with:
  Toggle switches:
    Send SMS: ON (green toggle)
    Send Email: ON (green toggle)
    Send WhatsApp: OFF (gray toggle)
  Recipient info:
    Phone: +91 98765 43210
    Email: rahul@email.com
  Message Template dropdown:
    "Select Template"
    Options:
      Status Update Message
      Document Request
      Approval Congratulations
      Rejection with Reason
      EMI Reminder
      Custom Message
  Preview box (gray background):
    Shows template message preview:
    "Dear Rahul, Your Home Loan application 
    status has been updated to: Sent to Bank. 
    Our team will contact you shortly. 
    — Sanskruti Associates"
  Edit Message toggle (allow custom edit)
  Send Now button: full width blue #2563EB
  Schedule for Later button: outline blue

SECTION 6 - DOCUMENT REQUEST SECTION:
- Section heading: "Request Documents"
- White card with:
  Checklist of documents:
    ☑️ Aadhaar Card — Received (green)
    ☑️ PAN Card — Received (green)
    ☑️ Salary Slip — Received (green)
    ☐ ITR Document — Not Received (red)
    ☐ Property Papers — Not Received (red)
    ☐ NOC Certificate — Not Received (red)
  Add custom document field:
    Input: "Enter document name..."
    Add button (blue outline)
  Send Request button:
    "Request Missing Documents via SMS"
    Full width orange button
  Note below: "Client will receive SMS with 
  document upload link"

SECTION 7 - ADMIN NOTES:
- Section heading: "Admin Notes"
- White card with:
  Existing notes:
    Note 1: "CIBIL score 780 — excellent profile"
             Admin Suresh — 02 Jun 2025
    Note 2: "Bank processing expected 7 days"
             Admin Priya — 05 Jun 2025
  Each note: light gray bubble + author + date
  Add note section:
    Text area: "Add a private note..."
    Note: "(Only visible to admins)"
    Add Note button (blue)

BOTTOM FIXED ACTION BAR:
- Fixed bar at very bottom of page
- Left: "Applicant: Rahul Sharma | 
  Loan: Home Loan | Amount: ₹45,00,000"
- Right side buttons:
  Save All Changes (green)
  Export Status Report PDF (blue outline)
  Call Applicant (green outline with phone icon)

CARD STYLE:
- Background: white
- Border radius: 16px
- Shadow: 0 4px 20px rgba(37,99,235,0.08)
- Padding: 24px
- Margin bottom: 20px

MOBILE RESPONSIVE:
- Two columns stack to single column on mobile
- All buttons full width on mobile
- Status pipeline becomes vertical on mobile

IMPORTANT:
- Do not change any existing pages
- Same sidebar as Admin Dashboard
- Same fonts and color theme throughout
- Only create this new page