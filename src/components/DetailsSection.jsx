import { useEffect, useRef } from "react";

function DetailsSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            { threshold: 0.4 } // 40% in viewport
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="workshop-section-bg" id="overlay">
            <div className="workshop-details">
                <div className="cards-container" id="details-section">
                    <h1 className="workshop-title" id="headline">
                        खुसुर - फुसुर Workshop
                    </h1>
                    <div className="cards-wrapper">
                        {/* Card 1 */}
                        <div className="card" style={{ animationDelay: "0.2s" }}>
                            <div className="card-content">
                                <h2>VANI-YATRA</h2>
                                <p>
                                    <strong>A transformative 3-month full-time course</strong> aimed at
                                    enhancing your expressive abilities by focusing on voice, breath,
                                    speech, eye movement, and facial expressions. This course is
                                    meticulously designed to help you conquer emotional blockages,
                                    overcome stage fear, and gain the confidence needed to shine in
                                    your professional and personal life.
                                </p>
                                <p>
                                    <strong>Program Highlights:</strong> 4 sessions per week, each
                                    lasting 2 hours, filled with immersive activities and practical
                                    exposure. Individual attention and feedback provided to each
                                    candidate.
                                </p>
                                <p>
                                    <strong>Outcomes:</strong> By the end of the course, you’ll
                                    participate in live performances such as dramas, dubbing sessions,
                                    and open mics — experiencing your own growth in confidence and
                                    communication.
                                </p>
                                <p>
                                    <strong>Who Can Join:</strong> Anyone aged 18 and above, regardless
                                    of profession or background. Ideal for both artists and non-artists
                                    who want to improve their self-expression.
                                </p>
                            </div>
                            <div className="fee">Course Fee: ₹54,999</div>
                        </div>

                        {/* Card 2 */}
                        <div className="card" style={{ animationDelay: "0.4s" }}>
                            <div className="card-content">
                                <h2>VANI-VIMARSH</h2>
                                <p>
                                    <strong>A compact yet powerful 4-day workshop</strong> tailored for
                                    professionals who use their voice intensively — such as actors,
                                    singers, voice-over artists, and podcasters. This workshop is for
                                    those who already have some understanding of their voice and want
                                    to deepen their skill set.
                                </p>
                                <p>
                                    <strong>What You’ll Do:</strong> 4 hours per day of intensive
                                    exercises and discussions, including a SWOT analysis (Strengths,
                                    Weaknesses, Opportunities, Threats) of your breath and vocal
                                    capabilities.
                                </p>
                                <p>
                                    <strong>Outcomes:</strong> Leave the workshop with enhanced
                                    awareness, vocal control, confidence, and actionable techniques you
                                    can immediately apply in your profession.
                                </p>
                            </div>
                            <div className="fee">Workshop Fee: ₹6,999</div>
                        </div>

                        {/* Card 3 */}
                        <div className="card" style={{ animationDelay: "0.6s" }}>
                            <div className="card-content">
                                <h2>VAARTALAP</h2>
                                <p>
                                    <strong>A one-on-one voice consultancy session</strong> designed
                                    for individuals seeking clarity, direction, and personalized
                                    guidance about their voice and breath techniques.
                                </p>
                                <p>
                                    <strong>Purpose:</strong> Whether you’re facing mental blocks,
                                    professional voice issues, or simply need vocal advice, this
                                    consultation helps you realign with your voice goals.
                                </p>
                                <p>
                                    <strong>Ideal For:</strong> Anyone looking for a customized
                                    approach to solve specific challenges or questions related to vocal
                                    performance and breath control.
                                </p>
                            </div>
                            <div className="fee">Counseling Fee: ₹2,999/hour</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default DetailsSection;