import useToken from "../hooks/use-token";

function Home() {
  const { isToken, setIsToken } = useToken();

  const logOutHandler = () => {
    localStorage.clear();
    setIsToken("");
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sint
        voluptas obcaecati! Rerum illo maxime harum autem, unde obcaecati
        adipisci nostrum impedit accusamus sunt nam distinctio quaerat
        voluptates, natus molestiae quisquam esse, explicabo provident dicta!
        Unde officiis quasi amet repellat iusto, praesentium ipsum voluptatibus
        laborum doloremque asperiores ipsa ab impedit doloribus sint inventore
        exercitationem dolorum architecto optio? Eum eaque distinctio corporis
        similique cupiditate placeat? Porro sed tempora dicta perferendis illo,
        expedita qui. Excepturi optio sequi laborum necessitatibus! Ipsam
        expedita illo fugiat cumque ipsa reiciendis voluptas labore accusantium,
        exercitationem animi, quae iste autem recusandae. Eveniet ex sint
        molestias dicta omnis! Et esse ullam cum nam? Voluptatibus corporis cum
        quo iste! Sed voluptatibus nihil ea officiis est cumque tenetur minima
        atque ducimus voluptatem beatae exercitationem tempore, dignissimos
        deserunt sit possimus? Amet nam quisquam recusandae provident porro ut,
        tempora minus, voluptates quas illo ad dignissimos debitis. Praesentium,
        facere? Veritatis rerum maxime dolores quis modi maiores omnis enim
        ducimus eligendi magni, optio quaerat delectus obcaecati provident
        beatae, quo odit. Suscipit ducimus veniam alias, similique eius officiis
        non rerum distinctio necessitatibus doloribus provident facilis
        laboriosam quae neque obcaecati ab nihil harum reiciendis minus, eaque
        doloremque cupiditate. Incidunt illum non alias reiciendis placeat,
        laborum provident quis similique, eligendi, assumenda accusamus dolorem
        magni? Ad, nam. Voluptas, magni earum esse deleniti officia nemo
        exercitationem velit, alias dolorum necessitatibus sint similique,
        itaque eius facilis aliquid eum qui laudantium excepturi dicta quidem.
        Tempore hic odit nemo veritatis magnam eaque voluptas error officia
        quisquam quae. Tenetur eveniet voluptate quae nulla illum aliquam animi
        doloribus vitae. Eveniet rem quaerat impedit illum minus quasi sequi
        commodi aliquam voluptatibus in dignissimos aut optio, accusantium quis
        ut voluptate dolore molestias odit numquam. Natus praesentium autem non.
        Esse dolorem numquam itaque facilis. Alias non temporibus laboriosam
        omnis amet esse maiores ut illo animi aliquam officiis dicta quisquam
        sed dolore in, tenetur doloribus saepe unde quidem optio eos consequatur
        ex. Cum iste explicabo molestiae doloremque laudantium corporis
        accusamus possimus consequatur animi atque minima impedit itaque
        provident, autem ipsa, natus harum. Voluptatem corrupti fuga repellat
        exercitationem mollitia provident tempore consequatur amet id laborum
        officia a itaque accusantium obcaecati distinctio quis est assumenda
        modi, necessitatibus maiores. Quo nemo fuga nostrum labore fugiat iusto
        libero iure beatae. Molestias illo nostrum quis suscipit quo, saepe
        consectetur deserunt sequi ex dolor debitis tenetur ut cumque? Quia est
        ratione fugit eos necessitatibus qui amet quam quasi laborum maxime,
        officia assumenda odit a sapiente? Eveniet dolore a itaque unde
        voluptatibus aperiam. Illo explicabo nostrum eligendi ex voluptatem
        quod, dicta possimus, non ut voluptates veniam, eos optio quam suscipit
        alias blanditiis ratione beatae accusamus. Cupiditate vel exercitationem
        dolores sapiente temporibus nulla suscipit eos id, corporis magni ab
        ratione labore architecto impedit iusto itaque, molestias reprehenderit
        quasi dolorum optio autem totam! Voluptatem facilis alias, ullam sunt
        inventore eum! Quam modi ea animi inventore repellendus dicta a!
        Explicabo consequuntur quo nesciunt doloremque voluptatem perferendis
        omnis dolorum esse veritatis quisquam maxime dolor pariatur deleniti
        nobis voluptatibus eos repellendus minima consequatur, delectus,
        mollitia libero numquam. Ad dolorem placeat accusamus!
      </div>
    </>
  );
}

export default Home;
