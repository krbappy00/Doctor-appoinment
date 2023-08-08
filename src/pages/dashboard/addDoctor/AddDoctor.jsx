import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";



const AddDoctor = () => {
    const [logInError, setLogInError] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [options,setOptions] = useState([])
    const [loading,setLoading] = useState(false);
    console.log(selectedOption);

    
    useEffect(() => {
      axios.get("http://localhost:5000/api/specialty").then((res) => {
        const data = res.data;
        setOptions(data)
      });
    }, []);

    const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
    const onSubmit = (data) => {
      setLoading(true)
      setLogInError('')
      const image = data.img[0];
      const formData = new FormData();
      formData.append('image',image)
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_KEY
      }`;
      fetch(url,{
        method:'POST',
        body:formData
      })
      .then(res=>res.json())
      .then(imageData=>{
        if(imageData.success){
          const img_url = imageData.data.url;
          setImgUrl(img_url);
          const doctorInfo = {
            name: data.name,
            email: data.email,
            qualification: data.qualification,
            specialty: selectedOption,
            img: imgUrl,
          };
          axios
            .post("http://localhost:5000/api/addDoctor", doctorInfo)
            .then((res) => {
              console.log(res);
              toast.success(`DR. ${data.name} Successfully Added`);
              setLoading(false)
            })
            .catch((err) => console.log(err));
        
        }
      })
      
    }

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 flex min-h-screen">
            <div className="mx-auto flex w-[80%] flex-col gap-2 md:w-[25%] lg:w-[25%] [&>*]:rounded-lg [&>*]:border-2 [&>:not(:first-child)]:mb-2 [&>:not(:first-child)]:text-xl [&>:not(p)]:p-3">
              <h1 className="border-none text-center text-text ">Add doctor</h1>
              <input
                {...register("name", { required: "Name is required" })}
                className="focus:outline-text"
                type="text"
                placeholder="Name"
              />
              {errors.name && (
                <p className="border-none text-red-600">
                  {errors.name?.message}*
                </p>
              )}{" "}
              <input
                {...register("email", { required: "Email is required" })}
                className="focus:outline-text "
                type="text"
                placeholder="Email"
              />
              {errors.email && (
                <p className="border-none text-red-600">
                  {errors.email?.message}*
                </p>
              )}
              <input
                {...register("qualification", {
                  required: "Qualification is required",
                })}
                className="focus:outline-text "
                type="text"
                placeholder="Qualification"
              />
              {errors.qualification && (
                <p className="border-none text-red-600">
                  {errors.qualification?.message}*
                </p>
              )}
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti={true}
              />
              <input
                {...register("img", { required: "Image is required" })}
                className="focus:outline-text "
                type="file"
                placeholder="Upload image"
              />
              {errors.img && (
                <p className="border-none text-red-600">
                  {errors.img?.message}*
                </p>
              )}
              {logInError && (
                <p className="m-0 border-none p-0 text-red-500">{logInError}</p>
              )}
              <button disabled={loading} type="submit" className="mt-4 disabled:bg-gray-200 bg-text text-white">
                Add doctor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
