import img from "../assets/mani.png";
function Hero() {
    return (
        <section className="min-h-screen bg-500-white flex w-full max-w-[1200px] mx-auto px-6">
            <div className="pt-25">
                <h1 className="text-7xl font-bold text-500-grey ">
                    Kandadi Manikanth Reddy
                </h1>
                <div className=" pt-6 text-4xl pb-6">
                    I build <span>web applications</span>
                </div>
                <p className="text-lg text-500-grey ">
                    Passionate full-stack developer with 1+ years of experience building corporate solutions and web applications. Specialized in React, Node.js, and modern web technologies with expertise in AI integration and real-time systems.
                </p>
                <div>
                    <div className=" p-4 mt-6 flex gap-4">
                        <button className="rounded-xl border-1 p-3 "> GitHub </button>
                        <button className="rounded-xl border-1 p-3 "> Linkedin </button>
                        <button className="rounded-xl border-1 p-3 "> Twitter </button>
                        <button className="rounded-xl border-1 p-3 "> Website </button>
                    </div>
                </div>
                <div className="flex gap-4 mt-6 text-sm">
                    <div>📧 <span>manikanthreddykandadi583@gmail.com</span></div>
                    <div>📍<span>Hyderabad, India</span></div>
                    <div>✅<span>open</span></div>


                </div>
            </div>
            {/* <div>
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4IameaFM71SBlKIo1AQKy7wp27NnQvddqKriu9FoAfhBeyb4rQrP_iQ&s=10"
                alt="Manikanth Reddy"
                className=" pt-50 "
            />
           
            </div> */}
             <div>
      <img
        src={img}
        alt="Manikanth Reddy"
        className="w-[400px] h-[550px] object-cover rounded-2xl shadow-xl"
      />
    </div>
        </section>
    );
}

export default Hero;