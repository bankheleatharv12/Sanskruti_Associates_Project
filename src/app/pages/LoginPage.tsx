import { Header } from '../components/Header';
import { LoginRegister } from '../components/LoginRegister';

export function LoginPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[70px]">
        <LoginRegister />
      </div>
    </div>
  );
}
