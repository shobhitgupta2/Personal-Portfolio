import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const MessageBox = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const handleMessageSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await fetch("https://formsubmit.co/6e226e2da93400ae5842f7e74f92893e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="h-4/5 w-1/3 rounded-2xl bg-zinc-900 flex flex-col py-6 items-center gap-4"
      onSubmit={handleSubmit(handleMessageSubmit)}
    >
      <input
        {...register("email", {
          required: "Please enter a valid email address",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
        })}
        type="email"
        className="bg-stone-800 border-2 self-center border-transparent border-b-green-500 h-14 w-11/12 rounded-2xl p-4 text-neutral-300
          focus:border-green-500 outline-none transition ease-in-out duration-300"
        placeholder="Enter your email"
      />
      <p className="pl-2 -mt-2 text-red-400 text-md w-11/12 h-14">
        {errors.email ? (errors.email.message as string) : " "}
      </p>

      <textarea
        {...register("message", {
          required: "Please enter a message",
        })}
        className="bg-stone-800 h-4/5 w-11/12 rounded-2xl self-center outline-none p-4 text-neutral-300
        border-2 border-transparent border-b-green-500 focus:border-green-500 transition ease-in-out duration-300 resize-none
        overflow-y-hidden"
        placeholder="Enter your message"
      />
      <p className="pl-2 -mt-2 text-red-400 text-md w-11/12 h-14">
        {errors.message ? (errors.message.message as string) : " "}
      </p>
      <button
        type="submit"
        className="bg-green-500 h-14 w-fit p-3 font-mono text-xl self-center rounded-xl hover:bg-green-600 transition ease-in-out duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default MessageBox;
