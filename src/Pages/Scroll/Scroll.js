import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Scroll.css";



const Scroll = (props) => {
    const [ toggleTxt, setToggleTxt ] = useState();
    const newsLetterRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setToggleTxt(entry.isIntersecting);
            // console.log("Entry", entry);
        })
        observer.observe(newsLetterRef.current);
    }, []);

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
        delay: 100
    });

    const handleForm = e => {
        e.preventDefault();
    }

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi dolor fugit, necessitatibus deserunt aperiam, non enim sint id, nostrum repellat repellendus minima itaque debitis in nemo. Temporibus inventore, animi provident debitis veniam nostrum quasi quaerat neque, fuga quibusdam vel commodi numquam quo necessitatibus sint minus quos molestiae similique sequi, ut aliquam deleniti! Fugit, quidem, quae facilis iure tenetur et dolores veniam earum aspernatur obcaecati culpa, nam molestiae illo. Excepturi assumenda ea illo fugiat architecto sunt, accusantium totam sint nihil, quam cupiditate nam doloribus eius! Similique ipsam omnis obcaecati quasi veritatis reiciendis? Molestias officia quae, consequuntur fuga culpa debitis aperiam alias non minima voluptates adipisci expedita ea sit amet sint aut placeat, perferendis reiciendis quam voluptatem reprehenderit doloremque ab labore. Natus sequi perferendis accusamus vero voluptatibus perspiciatis eveniet autem, facilis ratione corporis veritatis ullam reiciendis minima sunt magni quas impedit sed, suscipit nostrum corrupti, hic odio odit magnam ex. Quisquam voluptatibus vero quia suscipit possimus facere recusandae blanditiis nesciunt, obcaecati iure sapiente impedit praesentium ipsa eveniet quam porro debitis reiciendis pariatur perspiciatis, minus nihil amet rerum. Doloremque aliquam aliquid provident, cupiditate atque corporis quo tempore exercitationem sed suscipit, culpa sapiente aut quam eos, eius possimus quae. Minima corrupti dolore eveniet!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi dolor fugit, necessitatibus deserunt aperiam, non enim sint id, nostrum repellat repellendus minima itaque debitis in nemo. Temporibus inventore, animi provident debitis veniam nostrum quasi quaerat neque, fuga quibusdam vel commodi numquam quo necessitatibus sint minus quos molestiae similique sequi, ut aliquam deleniti! Fugit, quidem, quae facilis iure tenetur et dolores veniam earum aspernatur obcaecati culpa, nam molestiae illo. Excepturi assumenda ea illo fugiat architecto sunt, accusantium totam sint nihil, quam cupiditate nam doloribus eius! Similique ipsam omnis obcaecati quasi veritatis reiciendis? Molestias officia quae, consequuntur fuga culpa debitis aperiam alias non minima voluptates adipisci expedita ea sit amet sint aut placeat, perferendis reiciendis quam voluptatem reprehenderit doloremque ab labore. Natus sequi perferendis accusamus vero voluptatibus perspiciatis eveniet autem, facilis ratione corporis veritatis ullam reiciendis minima sunt magni quas impedit sed, suscipit nostrum corrupti, hic odio odit magnam ex. Quisquam voluptatibus vero quia suscipit possimus facere recusandae blanditiis nesciunt, obcaecati iure sapiente impedit praesentium ipsa eveniet quam porro debitis reiciendis pariatur perspiciatis, minus nihil amet rerum. Doloremque aliquam aliquid provident, cupiditate atque corporis quo tempore exercitationem sed suscipit, culpa sapiente aut quam eos, eius possimus quae. Minima corrupti dolore eveniet!
            </p>
            <animated.div ref={newsLetterRef} style={animation} className="cta-section">
                {/* <p><span className={`rocket ${toggleTxt ? "animateRocket" : ""}`}>🚀</span></p> */}
                <h2>N'en ratez pas une miette !</h2>
                <p><span className={`rocket ${toggleTxt ? "animateRocket" : ""}`}>🚀</span></p>
                <form onSubmit={handleForm}>
                    <label htmlFor="email">Inscrivez-vous à la newsletter</label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi dolor fugit, necessitatibus deserunt aperiam.
            </p>
        </div>
    );
};

export default Scroll;