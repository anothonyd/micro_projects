export default function Contact() {
    return (
        <div className="flex flex-col mx-auto rounded-[10px] p-5 bg-[#00000022] w-full max-w-[480px]">
            <h2>Contact Us</h2>
            <form className="mt-5 flex flex-col gap-5" action="" method="POST">
                <div class="relative">
                    <input id="email" className="peer" name="email" type="text" placeholder="john@doe.com" />
                    <label for="email">Your Email</label>
                </div>
                <div className="relative w-full flex flex-col">
                    <small>Your message:</small>
                    <textarea name="message" className="mt-2 text-black p-2 text-sm rounded h-20" required></textarea>
                </div>
                <input type="sumbit" value="Send Message" class="mt-5 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
            </form>
        </div>
    )
}