import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import AnimatedSection from "./AnimatedSection";

interface RatingProps {
    rating: number;
    showLabel?: boolean;
    className?: string;
}

interface Testimonial {
    fullName: string;
    picture: string;
    designation: string;
}

interface TestimonialData {
    author: Testimonial;
    rating: number;
    description: string;
}

interface TestimonialItemProps {
    testimonial: TestimonialData;
}

const testimonialList: TestimonialData[] = [
    {
        author: {
            fullName: "Sophia Alvez",
            picture: "https://cdn.easyfrontend.com/pictures/users/user6.jpg",
            designation: "Operations Director",
        },
        rating: 4.0,
        description: "Reliability and efficiency are at the core of their services. Our collaboration has been fruitful and we look forward to more projects."
    },
    {
        author: {
            fullName: "Mia Wong",
            picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
            designation: "Marketing Manager",
        },
        rating: 4.2,
        description: "The proactive customer service and attention to detail make this company stand out. They take the initiative and exceed expectations."
    },
    {
        author: {
            fullName: "Liam Chen",
            picture: "https://cdn.easyfrontend.com/pictures/users/user5.jpg",
            designation: "Product Lead",
        },
        rating: 4.8,
        description: "Innovative solutions and a team of dynamic individuals make this a great place to work with. We've achieved great results together."
    }
];

const Rating: React.FC<RatingProps> = ({ rating, showLabel, className }) => (
    <p className={classNames("mb-6", className)}>
        {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
                key={i}
                icon={i + 1 <= Math.floor(rating) ? faStar : (rating > i && rating < i + 1) ? faStarHalfAlt : faStar}
                className={(i + 1 <= Math.floor(rating) || (rating > i && rating < i + 1)) ? "text-yellow-500" : "text-yellow-200"}
            />
        ))}
        {showLabel && <span>{rating.toFixed(1)}</span>}
    </p>
);

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => (
    <div className="bg-white shadow-xl rounded-2xl transition duration-300 h-full p-6">
        <Rating rating={testimonial.rating} showLabel={false} />
        <p className="opacity-50 mb-6">{testimonial.description}</p>
        <div className="flex items-center justify-center">
            <img src={testimonial.author.picture} alt={testimonial.author.fullName}
                className="mr-2 max-w-full h-auto rounded-full border" width="47" />
            <div>
                <h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
                <p className="text-sm"><i>{testimonial.author.designation}</i></p>
            </div>
        </div>
    </div>
);

const Testimonials = () => (
        <section className="py-14 md:py-24 bg-white text-center">
                <h2 className="text-3xl md:text-5xl font-bold my-2">Client Success Stories</h2>
                <p className="text-md mb-4">Explore how our cutting-edge software solutions have empowered businesses to innovate and grow.</p>
                <AnimatedSection>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-8">
                        {testimonialList.map((testimonial, i) => (
                            <TestimonialItem key={i} testimonial={testimonial} />
                        ))}
                    </div>
                </AnimatedSection>
        </section>
);

export default Testimonials;
