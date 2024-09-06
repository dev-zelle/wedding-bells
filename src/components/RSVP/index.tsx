const RSVP = () => {
	return (
		<div 
			id="rsvp"
			className="w-full lg:mt-40 mt-40 flex flex-col items-center justify-center text-center gap-14 lg:px-[310px] px-5 py-20 bg-[#dad5d1] bg-opacity-50 "
			>
			<div className="flex flex-col gap-4">
				<span className="font-oswald lg:text-[25px] text-[23px] text-black tracking-wide">
					We have reserved seat(s) for you.
				</span>
				<div className="font-sans italic text-lg max-w-[700px] text-black leading-10">					
                    Kindly send your response to Ms. Juvy Roilo at <b>0917 123 0219</b>.
					<p>The favor of your response is requested.</p>
				</div>
			</div>
		</div>
	);
};

export default RSVP;