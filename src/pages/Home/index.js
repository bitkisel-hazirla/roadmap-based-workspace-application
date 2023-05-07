import landing from '../../assets/images/landing.jpeg';
import landing2 from '../../assets/images/landing2.jpg';
import landing3 from '../../assets/images/landing3.png';
import { AuthButton } from '../../components/UI/AuthButton';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div>
      <div className="bg-247 h-full pt-1">
        <header className="flex justify-between px-5">
          <h1 className="text-xl font-semibold pt-2">SHELLPY MELLPY</h1>

          <ul className="flex items-center gap-4 pt-1">
            <li>
              <Link
                className="hover:text-purple-400"
                style={{ cursor: 'pointer' }}
                activeClass="active"
                smooth
                spy
                to="thewhat"
              >
                The What
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-400"
                style={{ cursor: 'pointer' }}
                activeClass="active"
                smooth
                spy
                to="thewhy"
              >
                The Why
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-400"
                style={{ cursor: 'pointer' }}
                activeClass="active"
                smooth
                spy
                to="thehow"
              >
                The How
              </Link>
            </li>
          </ul>

          <div>
            <ul className="flex gap-4 pt-2">
              <AuthButton href="/login" className=" px-7 py-1" theme="secondary">
                Log In
              </AuthButton>
              <AuthButton href="/signup" className=" px-7 py-1" theme="secondary">
                Sign Up
              </AuthButton>
            </ul>
          </div>
        </header>
        <section className="flex justify-center items-center h-full " id="thewhat ">
          <div className="flex flex-row items-center justify-center gap-10 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl">Welcome To SHELLP!</h1>
              <h2 className="text-2xl">What Is Shellp?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <img className="w-2/5" src={landing} alt="thewhat-photo" />
          </div>
        </section>
      </div>
      <section className="bg-250 flex justify-center items-center h-full " id="thewhy">
        <div className="flex flex-row items-center justify-center gap-10 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl">WHY Shellp?</h1>
            <h2 className="text-2xl">A CATCHY SUBTITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <img className="w-2/5" src={landing2} alt="thewhy-photo" />
        </div>
      </section>
      <section className="bg-260 flex justify-center items-center h-full " id="thehow">
        <div className="flex flex-row items-center justify-center  gap-10 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl">This Is How We Do It</h1>
            <h2 className="text-2xl">A CATCHY SUBTITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <img className="w-1/3" src={landing3} alt="thehow-photo" />
        </div>
      </section>
    </div>
  );
};
