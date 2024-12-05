import React,{useEffect, useRef} from 'react';
import './manufacturing.css';
import blending from '../../assets/images/blending.png';
import molding from '../../assets/images/molding.jpeg';
import compressing from '../../assets/images/compressing.jpeg';
import hardening from '../../assets/images/hardening.png';
import hydrolysis from '../../assets/images/hydrolysis.png';
import drying from '../../assets/images/drying.png';


const ManufactureProcess = () => {
    const processOneRef = useRef(null);
    const processTwoRef = useRef(null);
    const processThreeRef = useRef(null);
    const processFourRef = useRef(null);
    const processFiveRef = useRef(null);
    const processSixRef = useRef(null);



    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.5
        };

        const handleScroll = (entries, observer) => {
            entries.forEach(entry => {
                const processDiv = entry.target;
                const isScrollingDown = entry.boundingClientRect.top < 0;

                if(entry.isIntersecting){
                    processDiv.classList.remove('hidden');
                }else if(isScrollingDown){
                    processDiv.classList.add('hidden');
                }
            });
        };

        const observer =new IntersectionObserver(handleScroll, options);

        if(processOneRef.current) observer.observe(processOneRef.current);
        if(processTwoRef.current) observer.observe(processTwoRef.current);
        if(processThreeRef.current) observer.observe(processThreeRef.current);
        if(processFourRef.current) observer.observe(processFourRef.current);
        if(processFiveRef.current) observer.observe(processFiveRef.current);
        if(processSixRef.current) observer.observe(processSixRef.current);



        return ()=> {
            observer.disconnect();
        };
    },[]);

    return (
        <section className='process-sec'>
            {/* Process one */}
            <div ref={processOneRef} className='process-div process-one'>
                <div className='process-text-div'>
                    <div className='process-name-no'>
                        <h3 className='process-no'>1</h3>
                        <span className='process-name'>Blending</span>
                    </div>
                    <div className='process-detail-div'>
                        <p className='process-detail'>The pigment composition is a mixture of high quality white Portland cement, marble powder and natural mineral colour pigments. The ingredients are blended together carefully over a period of 3-4 hours to produce the final colours.</p>
                    </div>
                </div>
                <div className='process-img-div'>
                    <img src={blending} alt="Blending image" className='process-img' />
                </div>
            </div>

            {/* Process Two */}
            <div ref={processTwoRef} className='process-div process-two'>
                <div className='process-text-div process-two-text-div'>
                    <div className='process-name-no process-two-name-no'>
                        <h3 className='process-no'>2</h3>
                        <span className='process-name'>Molding</span>
                    </div>
                    <div className='process-detail-div process-two-detail-div'>
                        <p className='process-detail'>The colours are filled with heand into a metal mold. The metal mold, containing the desired pattern is handmade from specific design drawings. Handmade cement tiles are uniqueand are expected to have slight imperfections, ehich give them character and depth.</p>
                    </div>
                </div>
                <div className='molding-img-div process-img-div'>
                    <img src={molding} alt="Molding image" className='process-img' />
                </div>
            </div>

            {/* Process Three */}
            <div ref={processThreeRef} className='process-div process-three'>
                <div className='process-text-div process-two-text-div'>
                    <div className='process-name-no process-two-name-no'>
                        <h3 className='process-no'>3</h3>
                        <span className='process-name'>Compressing</span>
                    </div>
                    <div className='process-detail-div process-two-detail-div'>
                        <p className='process-detail'>A cork in the from of a strong metal plate is applied at the top of the mold and the tile is pressed using a mechanical hydrautic press. The pressure epplied is up to 1-ton per square inch, which produces a compact tile.</p>
                    </div>
                </div>
                <div className='process-img-div process-three-img-div'>
                    <img src={compressing} alt="Molding image" className='process-img' />
                </div>
            </div>

            {/* Process Four */}
            <div ref={processFourRef} className='process-div process-four'>
                <div className='process-text-div process-two-text-div'>
                    <div className='process-name-no process-two-name-no'>
                        <h3 className='process-no'>4</h3>
                        <span className='process-name'>Hardening</span>
                    </div>
                    <div className='process-detail-div process-two-detail-div'>
                        <p className='process-detail'>After pressing, the tiles are removed from the mold and placed an a rack until they harden enough to be moved into a tank of water.</p>
                    </div>
                </div>
                <div className='hardening-img-div process-img-div'>
                    <img src={hardening} alt="Molding image" className='process-img' />
                </div>
            </div>

            {/* Process Five */}
            <div ref={processFiveRef} className='process-div process-five'>
                <div className='process-text-div process-two-text-div'>
                    <div className='process-name-no process-two-name-no'>
                        <h3 className='process-no'>5</h3>
                        <span className='process-name'>Hydrolysis</span>
                    </div>
                    <div className='process-detail-div process-two-detail-div'>
                        <p className='process-detail'>The tiles are cured in water for several days, and not touched, during which they undergo a hydrolysis process and harden into strong concrete.</p>
                    </div>
                </div>
                <div className='hydrolysis-img-div process-img-div'>
                    <img src={hydrolysis} alt="Molding image" className='process-img' />
                </div>
            </div>

            {/* Process Six */}
            <div ref={processSixRef} className='process-div process-six'>
                <div className='process-text-div process-two-text-div'>
                    <div className='process-name-no process-two-name-no'>
                        <h3 className='process-no'>6</h3>
                        <span className='process-name'>Drying</span>
                    </div>
                    <div className='process-detail-div process-two-detail-div'>
                        <p className='process-detail'>They are then removed from the tank, and allowed to further cure in the air, until they are fully ready to be shipped to the customer.
                        </p>
                    </div>
                </div>
                <div className='drying-img-div process-img-div'>
                    <img src={drying} alt="Molding image" className='process-img' />
                </div>
            </div>
        </section>
    )
}

export default ManufactureProcess;