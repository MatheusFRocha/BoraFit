
const info = async () =>  {

    const [data, setData] = useState([]);

    const auth = getAuth();
    const a = auth.currentUser.uid;
   
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState('')
    const [cidade, setCidade] = useState("")
    const [idade, setIdade] = useState('')
                
    const q = query(collection(db, "Perfil"), where("Id", "==", a));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const dados = (doc.id, " => ", doc.data());

        setNome(dados.Nome)
        setSobreNome(dados.sobreNome)
        setCidade(dados.Cidade)
        setIdade(dados.Idade)


    console.log(dados)


    });

}