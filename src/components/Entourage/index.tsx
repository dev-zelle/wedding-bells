import { useState, useEffect, useCallback } from "react";
import Titlebar from "../Titlebar";
import { entourage } from "../../data";

const offset = 5;
const slideWidth = 400;
const transitionDuration = 300;
const slides = entourage;

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(offset); // Start from offset to account for cloned slides
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [containerWidth, setContainerWidth] = useState(window.innerWidth);

	let touchStartX = 0;
	let touchEndX = 0;

	// Duplicating the first and last slides to create the loop effect with specified offset
	const firstThreeSlides = slides.slice(0, offset);
	const lastThreeSlides = slides.slice(-offset);
	const totalSlides = [...lastThreeSlides, ...slides, ...firstThreeSlides];

	const centerOffset = (containerWidth - slideWidth) / 2;

	// Handle slide transitions
	const nextSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex(prevIndex => prevIndex + 1);
	}, [isTransitioning]);

	const prevSlide = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex(prevIndex => prevIndex - 1);
	}, [isTransitioning]);

	// Handle swipe on mobile
	const handleTouchStart = useCallback((e: any) => {
		touchStartX = e.changedTouches[0].screenX;
	}, []);

	const handleTouchMove = useCallback((e: any) => {
		touchEndX = e.changedTouches[0].screenX;
	}, []);

	const handleTouchEnd = useCallback(() => {
		if (touchStartX - touchEndX > 50) {
			nextSlide(); // Swiped left, go to next slide
		} else if (touchEndX - touchStartX > 50) {
			prevSlide(); // Swiped right, go to previous slide
		}
	}, [touchStartX, touchEndX]);

	// Handle direct slide clicks and looping logic
	const handleClick = (index: number) => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex(index); // Regular slide click
	};

	// Keyboard navigation using arrow keys
	useEffect(() => {
		const handleKeyDown = (event: { key: string }) => {
			if (event.key === "ArrowRight") {
				nextSlide(); // Trigger next slide on right arrow key press
			} else if (event.key === "ArrowLeft") {
				prevSlide(); // Trigger previous slide on left arrow key press
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isTransitioning]);

	// After every transition, check if we need to reset the currentIndex to create the looping effect
	useEffect(() => {
		if (currentIndex <= offset - 1) {
			setTimeout(() => {
				setIsTransitioning(false);
				const diff = offset - currentIndex - 1; // idk how but this works
				setCurrentIndex(totalSlides.length - 1 - offset - diff); // Jump to end slide
			}, transitionDuration); // Delay to allow the transition to complete
		} else if (currentIndex >= totalSlides.length - offset) {
			setTimeout(() => {
				setIsTransitioning(false);
				const diff = (currentIndex - (slides.length + offset)); // idk how again, also works
				setCurrentIndex(offset + diff); // Jump to starting slide
			}, transitionDuration);
		} else {
			setTimeout(() => setIsTransitioning(false), transitionDuration);
		}
	}, [currentIndex, slides.length, totalSlides.length]);

	// Handle resize
	useEffect(() => {
		const handleResize = () => setContainerWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div id="entourage" className="w-full lg:pt-20 lg:pb-10 py-10 pb-5  flex flex-col gap-20">
		<div className="flex justify-center">
			<div className="flex flex-col gap-4 px-5">
			<Titlebar title="Entourage" />
			<span className="uppercase text-secondary font-oswald font-bold text-[45px]">
				Meet the Entourage
			</span>
			</div>
		</div>
		<div 
			className="relative"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<div
				className={`flex self-center ${
					isTransitioning
						? `transition-transform duration-${transitionDuration}`
						: "no-transition"
					}`}
				style={{
					transform: `translateX(${
					centerOffset - currentIndex * slideWidth
					}px)`,
				}}
			>
			{totalSlides.map((slide, index) => (
				<div
					key={index}
					style={{ minWidth: `${slideWidth}px` }}
					className={`flex flex-col items-center hover:opacity-100 ${
						isTransitioning
							? `transition-transform duration-${transitionDuration}`
							: "no-transition"
						} ${
						index === currentIndex
						? "scale-110 opacity-100"
						: "scale-90 opacity-75"
					}`}
				>
					{/* Header (Name of the person) */}
					<h2 className="uppercase text-secondary font-oswald font-medium text-[32px] tracking-wide text-center">{slide.name}</h2>

					{/* Profile Image (Rounded) */}
					<img
						className="w-64 h-64 rounded-full mt-4 border-4 border-white shadow-lg cursor-pointer object-cover object-top"
						src={slide.image}
						alt={slide.name}
						onClick={() => handleClick(index)}
					/>

					{/* Description (Role in the wedding) */}
					<p className="font-sans text-lg text-teams mt-4">{slide.role}</p>
				</div>
			))}
			</div>
			{/* Navigation Buttons */}
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 text-2xl p-3"
				onClick={prevSlide}
			>◀</button>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 text-2xl p-3"
				onClick={nextSlide}
			>▶</button>
			</div>
		</div>
	);
};

export default Carousel;
