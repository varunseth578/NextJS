import { Button } from "./Button";
export  function Signin() {
 
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign in</div>
              <div>
                <div className="pt-2">
                  <LabelledInput label="Username" placeholder="varun" />
                  <LabelledInput
                    label="Password"
                    type="password"
                    placeholder="123"
                  />
                  
                  <Button/>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
  }
  
  function LabelledInput({ label, placeholder, type = "text" }: LabelledInputType) {
    return (
      <div>
        <label className="block mb-2 text-sm font-semibold pt-4">{label}</label>
        <input
          type={type}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          placeholder={placeholder}
        />
      </div>
    );
  }
  
