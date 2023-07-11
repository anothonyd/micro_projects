export default function Contact() {
    return (
        <div className="contact rounded-[10px] border-2 p-5 border-white shadow min-w-[500px]">
            <h3>Contact Us</h3>
            <form className="flex flex-col gap-5">
                <label className="flex justify-between mt-5 items-center">
                    <span>Your email:</span>
                    <input type="email" className="w-2/3 rounded" name="email" required />
                </label>
                <label className="flex justify-between">
                    <span>Your message:</span>
                    <textarea name="message" className="w-2/3 rounded" required></textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}