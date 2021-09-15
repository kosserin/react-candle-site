import react, {useState,useEffect} from 'react';
import firstImage from './first.jpg';
import secondImage from './second.jpg';
import thirdImage from './third.jpg';
import fourthImage from './fourth.jpg';

function AboutPage() {

    const [modalShow, setModalShow] = useState(false);
    const [imageSource, setImageSource] = useState('');
    const [moduleClass, setModuleClass] = useState('module');

    const handleImageClick = (e) => {
        setModalShow(true);
        console.log(e.target.src)
        const imageSource = e.target.src;
        setImageSource(imageSource)
    }

/* KADA SE KLIKNE VAN SLIKE DA SE SAKRIJE MODAL */

let classOfModule = 'module';
classOfModule+= modalShow ? ' show' : '';

useEffect(() =>{
    console.log(classOfModule)
})

    function handleModalClick(e) {
        if(e.target.classList.contains('module')){
            console.log('xd');
            setModalShow(false)
        } else{
            console.log('not xd');
            return;
        }
    }

    return(
        <section id="about-container">
        <section id='about-page'>
        <div className="image-container"></div>
        <div className="background-container"></div>
        <div className="text-container">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fugit vero, vitae magnam a eius veritatis voluptatem ipsum illum eveniet at, dolores quos id earum sequi corrupti sint dolore iusto odio adipisci quod excepturi molestiae. Aspernatur neque dolore mollitia laborum dolor saepe qui omnis eveniet, asperiores ipsa quis necessitatibus quia provident repudiandae libero, placeat accusamus in sunt ab quaerat fugiat! Placeat, assumenda! Tenetur, rerum. Eos error deserunt nemo ipsam, mollitia commodi! Molestiae minima reprehenderit accusantium neque exercitationem deserunt placeat dolore quae? Ipsum labore in tempora laboriosam voluptate dolorem! Qui dignissimos, facere distinctio ipsum cum magni asperiores amet eaque commodi fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quam. Dolores, sequi. Repellendus similique, reiciendis numquam velit repudiandae et assumenda quaerat adipisci odio dolore, dolorem consectetur consequatur ducimus sunt hic quod? Assumenda, deserunt. Cumque excepturi reiciendis maiores impedit at deserunt consequatur nobis perspiciatis minima vitae fugit, necessitatibus, facere magnam provident soluta, quasi ducimus? Laborum magni ipsum voluptatum ipsam labore blanditiis laboriosam, voluptas, reprehenderit accusantium asperiores similique quos, maiores doloremque iure.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio provident ab esse recusandae minima, obcaecati doloribus sit quam sunt quod consectetur laudantium animi iure culpa libero repellat dolore. Repudiandae asperiores ab eaque, cum corrupti cupiditate repellat aspernatur voluptatum. Sequi cum, accusantium placeat, cupiditate voluptatibus libero blanditiis non ipsa a, adipisci illum minus. Ipsa sit consectetur voluptatem libero dolore quod. Rerum adipisci impedit iusto sint tempore possimus? Consequuntur expedita quod porro dicta laborum soluta facere? Incidunt, maxime. Repellat pariatur sed eligendi obcaecati atque deserunt in modi laboriosam incidunt odio! Enim, qui.</p>
        </div>
    </section>
    <section id="about-section">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid voluptatum enim blanditiis?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dicta quisquam minus harum id omnis vero nihil incidunt deserunt corporis adipisci nemo fugit nisi laborum repudiandae, eaque obcaecati soluta non quidem quos asperiores explicabo distinctio nostrum commodi! Dicta autem nam a ut. Tempora, repellat quaerat ipsum illum odio quis dolorum quibusdam ea facere voluptatem similique in temporibus reiciendis repellendus molestias incidunt! Adipisci at aliquid magnam, quidem blanditiis illo natus dolorem unde, nesciunt harum architecto. Fugit reprehenderit commodi mollitia iure quos molestias aliquid cumque nam vero asperiores obcaecati ad nihil reiciendis, excepturi, debitis sint et unde sequi natus quas repudiandae ducimus consectetur nobis! Ratione ea minus, dolorum id eum doloribus, modi aperiam atque temporibus a illum mollitia? Delectus minus tempore dolor distinctio debitis est expedita ducimus assumenda provident? Quae ullam quia saepe in asperiores minima adipisci ratione voluptatibus nostrum aspernatur corporis distinctio modi, minus praesentium veritatis quos molestiae, error ex! Necessitatibus voluptas deleniti quidem rerum est quas maxime aliquid dolor? Tempora, laborum culpa obcaecati repellat dolor corporis, dolorum recusandae harum eos, error hic esse officia exercitationem eum sint voluptatibus nihil officiis provident deserunt. Accusamus tempora debitis consequatur beatae, dolorum ratione sint perspiciatis ab! Tenetur, ipsum ea ut ratione cumque sunt labore.</p>
        <div className="images-container">
            <img onClick={handleImageClick} src={firstImage} alt="" />
            <img onClick={handleImageClick} src={secondImage} alt="" />
            <img onClick={handleImageClick} src={thirdImage} alt="" />
            <img onClick={handleImageClick} src={fourthImage} alt="" />
        </div>
        <br /><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem deleniti vitae possimus nam esse odit, officiis sunt reprehenderit ducimus dolore dicta perferendis, adipisci corrupti mollitia neque, omnis pariatur ad repellat incidunt! Incidunt est neque architecto ipsam eaque perferendis quos laudantium quas deleniti voluptatibus, nam magnam dignissimos saepe ducimus voluptates provident pariatur dolorum quam! Similique inventore totam doloribus officia quidem dolore ullam consequuntur qui non recusandae nulla officiis, cumque deleniti suscipit! Quae, magni temporibus beatae velit praesentium eligendi architecto voluptas neque asperiores nisi repudiandae modi id at aut omnis, adipisci similique aspernatur odit dolor dolorem cum maiores cupiditate qui. Consequuntur explicabo animi sit quis? Soluta voluptatum veniam obcaecati officiis unde aspernatur ipsa cupiditate a error, quo praesentium est modi non ea inventore. Voluptas aut qui nostrum molestiae iste impedit, itaque, provident veniam libero, quo dolorem quos sit? Id commodi enim facere nihil accusantium optio at architecto ratione aperiam eveniet. Repellendus excepturi suscipit tempora neque asperiores nemo quidem fuga officiis alias aut nulla ratione facilis vitae sequi quae magni obcaecati consequuntur cum, ducimus earum sapiente expedita distinctio molestias? Odit nulla laudantium aspernatur voluptatibus quod sequi esse, obcaecati molestiae voluptates consequuntur id vel in doloribus natus provident facere accusamus amet. Inventore nisi dolorem ut dolore commodi voluptatem illum omnis ducimus earum ipsa adipisci architecto consequuntur provident voluptatibus sunt necessitatibus voluptatum, hic non illo debitis. Sit ipsam dolores, quod natus eos libero expedita, eaque voluptate porro velit ea aspernatur doloribus vero fugiat tempore, earum iusto? Quibusdam laborum aspernatur architecto vitae odio nostrum harum consectetur aut esse perspiciatis officia eum porro sed quas molestiae natus reprehenderit, deserunt fugit cumque tempora saepe. Maxime mollitia consequatur ipsum iusto aliquam sunt assumenda temporibus, sint fuga nobis quam nulla alias, dolorum, consectetur amet ad! Reiciendis dignissimos ipsam harum quidem sunt, incidunt quas quaerat temporibus vel, hic, odio rerum totam impedit illum atque quibusdam. Similique, voluptatum. Suscipit cum ea nulla facere incidunt odio quo explicabo atque autem nostrum quibusdam eaque fugit reprehenderit asperiores, aperiam vel neque exercitationem alias? Recusandae nam animi quo asperiores qui, pariatur quisquam ex dolores eaque nisi! Ut laudantium quo hic culpa delectus quae vitae accusamus aspernatur.</p>
    </section>
    <section onClick={handleModalClick} id="about-modal" className={classOfModule} /*modalShow ? 'module show' : 'module'*/>
        <img src={imageSource} alt="" />
    </section>
    </section>
    )
}

export default AboutPage;