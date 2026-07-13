function abrirModal() {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
     document.getElementById("registrationForm").classList.remove("hide-content");
    document.getElementById("successMessage").classList.remove("show-success");
    
    // Opcional: Limpa os textos que o usuário digitou nas textareas
    const fields = document.querySelectorAll('.modal-window textarea');
    fields.forEach(field => field.value = "");
}

function salvarSucesso() {
 
 
    document.getElementById("registrationForm").classList.add("hide-content");
    
    // 2. Mostra o parágrafo de sucesso usando a classe do CSS
    document.getElementById("successMessage").style.display="block";
    
    // 3. Aguarda 3 segundos e fecha o modal sozinho
    setTimeout(function() {
        fecharModal();
    }, 3000);
}
function mostrarSecao(secaoId, botao) {

    document.querySelectorAll(".secao").forEach(secao => {
        secao.style.display = "none";
    });

    const secao = document.getElementById(secaoId);
    if (secao) {
        secao.style.display = "block";
    }

    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("ativo");
    });

    if (botao) {
        botao.classList.add("ativo");
    }
}
function rolarDireita() {

    document.getElementById("categorias")
    .scrollBy({
        left: 200,
        behavior: "smooth"
    });

}

function rolarEsquerda() {

    document.getElementById("categorias")
    .scrollBy({
        left: -200,
        behavior: "smooth"
    });

}
function mostrarSecao1(secaoId, botao) {

    document.querySelectorAll(".secao1").forEach(secao => {
        secao.style.display = "none";
    });

    const secao1 = document.getElementById(secaoId);
    if (secao1) {
        secao1.style.display = "block";
    }

    document.querySelectorAll(".menu-item1").forEach(item => {
        item.classList.remove("ativo1");
    });

    if (botao) {
        botao.classList.add("ativo1");
    }
}
 
function abrirModal1(id){
    
    document.getElementById(id).style.display= "block";
}

function fecharModal1(id){
    document.getElementById(id).style.display= "none";

}



function diminuirQuantidade1(botao){

    let modal = botao.closest(".modal2");

    let qtdEl = modal.querySelector(".qt2");
    let precoEl = modal.querySelector(".preco");
    let totalEl = modal.querySelector(".total");

    let quantidade = Number(qtdEl.textContent);

    if (quantidade > 1){
        quantidade--;
        qtdEl.textContent = quantidade;
    }

 let total = quantidade * Number(precoEl.textContent);
    totalEl.textContent = "R$" + total.toFixed(2);


}

    




  function aumentarQuantidade1(botao){

    let modal = botao.closest(".modal2");

    let qtdEl = modal.querySelector(".qt2");
    let precoEl = modal.querySelector(".preco");
    let totalEl = modal.querySelector(".total");

    let quantidade = Number(qtdEl.textContent);

    quantidade++;
    qtdEl.textContent = quantidade;

    let total = quantidade * Number(precoEl.textContent);
    totalEl.textContent = "R$" + total.toFixed(2);
} 
function diminuirQuantidade(id){
    let elemento = document.getElementById(id);
    let quantidade = Number(elemento.textContent);
    if (quantidade > 1){
        quantidade --;
    }
    elemento.textContent = quantidade;
}

function aumentarQuantidade(id){
    let elemento = document.getElementById(id);
    let quantidade = Number(elemento.textContent);
    quantidade ++;
    
    document.getElementById(id).textContent= quantidade; 
}
  const produtos = [
  {id:1, nome:"Duo Calabresa", preco:80.90, img:"pizza11.webp", desc:"Queijo, calabresa, calabresa defumada em cubos e orégano."},
  {id:2, nome:"Corn $ Bacon", preco:85.90, img:"pizza12.webp", desc:"Queijo, bacon, orégano e milho."},
  {id:3, nome:"4 Queijos", preco:90.00, img:"pizza13.webp", desc:"Queijo, requeijão, gorgonzola, orégano e parmesão ralado."},
  {id:4, nome:"Pão de Alho",preco:90.00,img:"pizza14.webp",desc:"Queijo, pão ciabatta, pasta de alho, parmesão ralado e orégano."},
  {id:5, nome:"Veggie®",preco:90.00,img:"pizza15.webp",desc:"Queijo, champignon, azeitona preta, cebola, orégano e pimentão verde"},
  {id:6, nome:" Cheddar & Pepperoni",preco:90.00,img:"pizza16.webp",desc:"Queijo, molho sabor queijo cheddar, pepperoni e orégano."},
  {id:7,  nome:"Frango & Bacon",preco:90.00,img:"pizza17.webp",desc:"Frango desfiado, bacon, tomate, requeijão e orégano."},
  {id:8, nome:" Napolitana",preco:90.00,img:"pizza18.webp",desc:"Queijo, tomate, orégano e parmesão ralado."},
  {id:9, nome:"Catuperoni",preco:90.00,img:"pizza19.webp",desc:"Queijo, pepperoni, requeijão, orégano e parmesão ralado."},
  {id:10, nome:"Frango Caipira",preco:90.00,img:"pizza20.webp",desc:"Queijo, frango desfiado, milho, catupiry e orégano."},
  {id:11, nome:"Portuguesa",preco:90.00,img:"pizza21.webp",desc:"Queijo, presunto, ovo de codorna, azeitona preta, cebola, orégano e pimentão verde."},
  {id:12, nome:"Cheddar & Bacon",preco:90.00,img:"pizza22.webp",desc:"Queijo, molho sabor queijo cheddar, bacon e orégano."},
  {id:13, nome:"Frango com Cream Cheese",preco:90.00,img:"pizzae1.webp",desc:"Queijo, frango desfiado, Cream Cheese, orégano e parmesão ralado."},
  {id:14, nome:"Carne Seca Com Cream Cheese",preco:80.00,img:"pizzae2.webp",desc:"Queijo, cebola, carne seca desfiada, cream cheese e orégano."},
  {id:15, nome:"Pepperrock",preco:80.00,img:"pizzae3.webp",desc:"Queijo, pepperoni, azeitona preta, parmesão ralado, orégano, alho granulado e cream cheese."},
  {id:16, nome:"Frango Grelhado",preco:80.00,img:"pizzae4.webp",desc:"Queijo, frango, requeijão, tomate, azeitona preta, orégano e manjericão."},
  {id:17, nome:"Extravaganzza®",preco:90.00,img:"pizzae5.webp",desc:"Queijo, pepperoni, presunto, azeitona preta, champignon, cebola, orégano e pimentão verde."},
  {id:18, nome:"Canadense",preco:80.00,img:"pizzae6.webp",desc:"Queijo, presunto, bacon, champignon, molho thai sweet chili e orégano."},
  {id:19, nome:"Americana",preco:80.00,img:"pizzae7.webp",desc:"Queijo, pepperoni, bacon, molho americano e orégano."},
  {id:20, nome:"Calabresa Especial",preco:80.00,img:"pizzae8.webp",desc:"Queijo, azeitona preta, calabresa, cebola, orégano e cream cheese."},
  {id:21, nome:"Egg & Bacon",preco:80.00,img:"pizzae9.webp",desc:"Queijo, bacon, cebola, cream cheese, orégano e ovo de codorna."},
  {id:22, nome:"La Bianca",preco:80.00,img:"pizzae10.webp",desc:"Queijo, queijo de búfala e vaca, requeijão, parmesão ralado, orégano e manjericão."},
  {id:23, nome:"Meat & Bacon",preco:80.00,img:"pizzae11.webp",desc:"Queijo, bacon, calabresa, pepperoni, orégano e presunto."},
  {id:24, nome:"Calabresa Fest",preco:85.00,img:"pizzae12.webp",desc:"Queijo, calabresa, calabresa defumada em cubos, queijo parmesão, molho sabor queijo cheddar e orégano."},
  {id:25, nome:"Mexicana",preco:80.00,img:"pizzae13.webp",desc:"Queijo, carne seca, milho, cebola, pimentão, molho sabor queijo cheddar, condimento mexicano e orégano."},
  {id:26, nome:"Queijo e Milho",preco:80.00,img:"pizza1.webp",desc:"Queijo, milho e orégano."},
  {id:27, nome:"Queijo",preco:80.00,img:"pizza2.webp",desc:"Queijo e orégano."},
  {id:28,nome:"Calabresa",preco:80.00,img:"pizza3.webp",desc:"Queijo, calabresa e cebola, orégano."},
  {id:29,nome:"Frango com Requiejão",preco:80.00,img:"pizza4.webp",desc:"Frango desfiado, cebola, orégano e requeijão"},
  {id:30,nome:"Monte a Sua",preco:80.00,img:"montesua.webp",desc:"Monte sua pizza com todos os toppings que você deseja."},
  {id:31 ,nome:"Queijo Cremoso",preco:80.00,img:"pizza6.webp",desc:"Queijo, creme culinário e orégano."},
  {id:32 ,nome:"Margherita",preco:80.00,img:"pizza7.webp",desc:"Queijo, tomate, orégano e manjericão."},
  {id:33 , nome:"Pepperoni",preco:80.00,img:"pizza8.webp",desc:"Queijo, orégano e pepperoni."},
  {id:34 ,nome:"3 Queijos", preco:80.00,img:"pizza9.webp",desc:"Queijo, requeijão, orégano e parmesão ralado."},
  {id:35, nome:"Calabresa Defumada",preco:80.00,img:"pizza10.webp",desc:"Queijo, calabresa defumada em cubos, cebola e orégano."},
  {id:36,nome:"Pizza Romeu e Julieta",preco:80.00,img:"sobre3.webp",desc:"Pizza recheada de creme culinário, queijo, creme de goiabada e Catupiry® Original."},
  {id:37,nome:"Pizza de Nutella®",preco:80.00,img:"sobre4.webp",desc:"Pizza recheada de Nutella®."},
  {id:38,nome:"Pizza de Churros",preco:80.00,img:"sobre5.webp",desc:"Pizza de doce de leite, coberta de açúcar e canela."},
  {id:39,nome:"Pizza Doce de Leite",preco:80.00,img:"sobre6.webp",desc:"Pizza de doce de leite, coberta de doce de leite."},
  {id:40,nome:"Romeu e Julieta Pan",preco:80.00,img:"sobre7.webp",desc:"Deliciosa massa pan, aerada e com flocos de manteiga, recheada de creme culinário, queijo, creme de goiabada e Catupiry® Original."},
  {id:41,nome:"Nutella® Pan",preco:80.00,img:"sobre8.webp",desc:"Pizza recheada de Nutella®."},
  {id:42,nome:"Choco Pan",preco:80.00,img:"sobre9.webp",desc:"Deliciosa massa pan, aerada e com flocos de manteiga, coberta de creme de baunilha, brigadeiro de chocolate e granulado."},
  {id:43,nome:"Pizza doce feita com biscoito Biscoff®",img:"sobre14.webp",preco:80.00,desc:"Pizza recheada de doce de leite e coberta com pedaços crocantes do biscoito Biscoff®."},
  {id:44,nome:"Pizza de M&Ms®",preco:80.00,img:"sobre15.webp",desc:"Pizza recheada com creme de baunilha, brigadeiro de chocolate e M&Ms®."},
  {id:45,nome:"Pizza de Ovomaltine®",preco:80.00,img:"sobre16.webp",desc:"Pizza de Ovomaltine® com creme de baunilha e coberta de Ovomaltine® crocante."},
  {id:46,nome:"Pizza de Brigadeiro",preco:80.00,img:"sobre17.webp",desc:"Pizza de brigadeiro com creme de baunilha, brigadeiro de chocolate e granulado."},
  {id:47,nome:"Pizza Pan doce feita com biscoito Biscoff®",preco:80.00,img:"sobre18.webp",desc:"Pizza recheada de doce de leite e coberta com pedaços crocantes do biscoito Biscoff®."},
  {id:48,nome:"Churros Pan",preco:80.00,img:"sobre19.webp",desc:"Deliciosa massa pan, aerada e com flocos de manteiga, recheada de doce de leite, açúcar e canela."},
  {id:49,nome:"Pan Doce de Leite",preco:80.00,img:"sobre20.webp",desc:"Deliciosa massa pan, recheada com flocos de manteiga, recheada de doce de leite e açúcar."},
  
];
function abrirProduto(id){

  produtoAtual = produtos.find(p => p.id === id);
  quantidade = 1;
  document.getElementById("qtd").textContent=quantidade;

  document.getElementById("modal-teste").style.display = "block";

  document.getElementById("nome").textContent = produtoAtual.nome;
  document.getElementById("img").src = produtoAtual.img;
  document.getElementById("desc").textContent = produtoAtual.desc;
  document.getElementById("preco").textContent = produtoAtual.preco;

  atualizarTotal();
}

function mais(){
  quantidade++;
  document.getElementById("qtd").textContent = quantidade;
  atualizarTotal();
}

function menos(){
  if(quantidade > 1){
    quantidade--;
    document.getElementById("qtd").textContent = quantidade;
    atualizarTotal();
  }
}
function atualizarTotal(){
  let total = produtoAtual.preco * quantidade;
  document.getElementById("total").textContent = total.toFixed(2);
}
function fechar(){
  document.getElementById("modal-teste").style.display = "none";
}

const produto1 = [
    {id:1, nome:"Coca-Cola",preco:10.90,img:"beb1.jpg",desc:"Lata,600 ml ou 2L"},
    {id:2, nome:"Fanta Guaraná",preco:10.90,img:"beb3.avif",desc:"Lata,600 ml ou 2L" },
    {id:3, nome:"Fanta Laranja",preco:10.90,img:"beb4.webp",desc:"Lata,600ml ou 2L"},
    {id:4, nome:"Coca-Cola Zero",preco:10.90,img:"beb8.webp",desc:"Lata,600ml ou 2L"},
    {id:5, nome:"Sprite",preco:10.90,img:"beb9.webp",desc:"Lata,600 ml ou 2L"}
];

function abrirProduto1(id){

  produtoAtual = produto1.find(p => p.id === id);
  quantidade = 1;
   document.getElementById("qtd1").textContent=quantidade;

  document.getElementById("modal-teste1").style.display = "block";

  document.getElementById("nome1").textContent = produtoAtual.nome;
  document.getElementById("img1").src = produtoAtual.img;
  document.getElementById("desc1").textContent = produtoAtual.desc;
  document.getElementById("preco1").textContent = produtoAtual.preco;

  atualizarTotal1();
}

function mais1(){
  quantidade++;
  document.getElementById("qtd1").textContent = quantidade;
 atualizarTotal1()
}

function menos1(){
  if(quantidade > 1){
    quantidade--;
    document.getElementById("qtd1").textContent = quantidade;
   atualizarTotal1()
  }
}
function atualizarTotal1(){
  let total = produtoAtual.preco * quantidade;
  document.getElementById("total1").textContent = total.toFixed(2);
  renderizarCarrinho()
}
function fechar1(){
  document.getElementById("modal-teste1").style.display = "none";
}

const produto2 = [
    {id:1, nome:"Fanta Uva",preco:7.50,img:"beb5.png",desc:"Lata"},
    {id:2, nome:"Água Com Gás 350ml",preco:7.50,img:"beb6.webp",desc:"Água Com Gás 350ml"},
    {id:3, nome:"Red Bull Melão",preco:15.00,img:"beb7.webp",desc:"Red Bull Melão" },
    {id:4, nome:"Água com Gás 500ml",preco:7.00,img:"beb10.webp",desc:"Água com Gás 500ml"},
    {id:5, nome:"Fanta Uva",preco:10.50,img:"beb11.webp",desc:"Fanta Uva 2L"},
    {id:6, nome:"Red Bull Zero",preco:15.00,img:"beb13.webp",desc:"Lata 250 Ml"},
    

];

function abrirProduto2(id){

  produtoAtual = produto2.find(p => p.id === id);
  quantidade = 1;
 document.getElementById("qtd2").textContent=quantidade;
  document.getElementById("modal-teste2").style.display = "block";

  document.getElementById("nome2").textContent = produtoAtual.nome;
  document.getElementById("img2").src = produtoAtual.img;
  document.getElementById("desc2").textContent = produtoAtual.desc;
  document.getElementById("preco2").textContent = produtoAtual.preco;

  atualizarTotal2();
}

function mais2(){
  quantidade++;
  document.getElementById("qtd2").textContent = quantidade;
  atualizarTotal2();
}

function menos2(){
  if(quantidade > 1){
    quantidade--;
    document.getElementById("qtd2").textContent = quantidade;
    atualizarTotal2();
  }
}
function atualizarTotal2(){
  let total = produtoAtual.preco * quantidade;
  document.getElementById("total2").textContent = total.toFixed(2);
}
function fechar2(){
  document.getElementById("modal-teste2").style.display = "none";
}

const produto3 = [
    {id:1,nome:"Amstel",img:"beb12.webp",desc:"Lata ou Longneck",preco:10.00},
];



  function abrirProduto3(id) {
    quantidade=1;
     document.getElementById("qtd3").textContent=quantidade;
   document.getElementById("modal-teste3").style.display = "block";
 
   produtoAtual = produto3.find(p => p.id === id)
   document.getElementById("nome3").textContent= produtoAtual.nome;
   document.getElementById("img3").src = produtoAtual.img;
   document.getElementById("desc3").textContent= produtoAtual.desc;
   document.getElementById("preco").textContent=prosutoAtual.preco;


  }
 
  function mais3(){
  quantidade ++;
document.getElementById("qtd3").textContent= quantidade;
}
function menos3(){
    
   if (quantidade >1){
    quantidade --;
    document.getElementById("qtd3").textContent = quantidade;
   }

}
function fechar3(){
    document.getElementById("modal-teste3").style.display = "none";
} 

const carrinho = [];
let modalcarrinho =document.getElementById("modal-carrinho");
let conteudocarrinho= document.getElementById("conteudo-carrinho");
let totalcarrinho = document.getElementById("total-carrinho");

function adicionarCarrinho() {
  console.log(produtoAtual)
  carrinho.push({
    nome:produtoAtual.nome,
    preco:produtoAtual.preco,
    imagem:produtoAtual.img,
    quantidade:quantidade,


  });
  let total =0;

  conteudocarrinho.innerHTML = "";
  
  for (let i=0; i < carrinho.length; i++)
  { 
    total += carrinho[i].preco * carrinho[i].quantidade;


    conteudocarrinho.innerHTML +="<div class='card2'>" + "<img src= '" + carrinho[i].imagem + "' width='120px'>" +"<div class= 'porta3'>" + " <h3 >" + carrinho[i].nome + "</h3>" + "\n" + "<p class='p-2'>" + "R$" + carrinho[i].preco.toFixed(2) + "</p>" + "\n" + "<p class='p-2'>" + "Quantidade: " + carrinho[i].quantidade + "</p>" + "<button class='remover' onclick='removerCarrinho("+ i +")'>" + "Remover" + "</button>" + "</div>" + "</div>";
    totalcarrinho.innerHTML = total.toFixed(2);
    

    
  
  }

}

function mostrarSubsecao(id) {


 document.querySelectorAll(".subsecoes").forEach(function(secao){
  secao.style.display = "none";

 });
 document.getElementById(id).style.display = "block";
}


const produto4 = [
  {id:1,nome:"Canadense",img:"canadense.webp",preco:15.00,desc:"Queijo, presunto, bacon, champignon, molho thai sweet chili e orégano."},
  {id:2,nome:"Americano",img:"americano.webp",preco:15.00,desc:"Queijo, requeijão, pepperoni, bacon, molho americano e azeite."},
  {id:3,nome:"Molho Americano",img:"molhoamer.webp",preco:9.90,desc:"Molho à base de maionese sabor picles."},
  {id:4,nome:"Mexicano",img:"mexic.webp",preco:15.00,desc:"Queijo, cream cheese, carne seca, milho, cebola, pimentão, molho sabor queijo cheddar, condimento mexicano e azeite."},
  //Novidades
  {id:5,nome:"Cheedar Volcano",img:"acomp1.webp",preco:20.00,desc:"Queijo e molho sabor queijo cheddar."},
  {id:6,nome:"Alho Roll - 8 und",img:"acomp2.webp",preco:20.00,desc:"Entrada crocante com 8 unidades, feita de massa pan, recheada de alho e parmesão."},
  {id:7,nome:"Chicken Roll - 8 und",img:"acomp3.webp",preco:20.00,desc:"Entrada crocante com 8 unidades, feita de massa pan, recheada de alho e parmesão."},
  {id:8,nome:"Calabresa Roll 8- und",img:"acom8.webp",preco:20.00,desc:"Entrada crocante com 8 unidades, feita de massa pan, recheadas de calabresa defumada em cubos, requeijão, queijo, queijo parmesão, molho maionese grill e orégano."},
  {id:9,nome:"Cheesebread 4 Queijos",img:"acomp5.webp",preco:20.00,desc:"Queijo, gorgonzola, parmesão ralado, requeijão e azeite."},
  {id:10,nome:"Alho Roll - 4 und",img:"acomp2.webp",preco:20.00,desc:"Entrada crocante com 4 unidades, feita de massa pan, recheada de alho e parmesão."},
  {id:11,nome:"Chicken Roll - 4 und",img:"acomp3.webp",preco:20.00,desc:"Entrada crocante com 4 unidades, feita de massa pan, recheada de frango desfiado, queijo e molho de tomate, coberta de maionese grill, molho chipotle levemente apimentado e parmesão ralado."},
  {id:12,nome:"Calabresa Roll - 4 und",img:"acom8.webp",preco:20.00,desc:"Entrada crocante com 4 unidades, feita de massa pan, recheadas de calabresa defumada em cubos, requeijão, queijo, queijo parmesão, molho maionese grill e orégano."},
  {id:13,nome:"Cheesebread Calabresa",img:"acomp6.webp",preco:20.00,desc:"Queijo, calabresa, cebola, parmesão ralado, requeijão e azeite."},
  {id:14,nome:"Cheesebread Margherita",img:"acomp7.webp",preco:20.00,desc:"Queijo, tomate, requeijão, parmesão ralado, azeite e manjericão."},
 //Acompanhamentos
 {id:15,nome:"3 Queijos",img:"lasanha1.webp",preco:25.00,desc:"Lasanha recheada de queijo, parmesão ralado, requeijão, creme culinário e finalizada com orégano. Aproximadamente 340g."},
 {id:16,nome:"Queijos & Presunto",img:"lasanha2.webp",preco:25.00,desc:"Lasanha recheada de queijo, presunto, molho de tomate, creme culinário e finalizada com orégano. Aproximadamente 340g."},
 {id:17,nome:"Frango & Bacon",img:"lasanha3.webp",preco:25.00,desc:"Lasanha recheada de queijo, frango desfiado, bacon em cubos, molho de tomate, creme culinário e finalizada com orégano. Aproximadamente 340g."},
 {id:18,nome:"Calabresa",img:"lasanha4.webp",preco:25.00,desc:"Lasanha recheada de queijo, calabresa, calabresa defumada em cubos, cebola, molho de tomate, molho branco e finalizada com orégano."},
 //Lasanhas
 {id:19,nome:"Queijo & Presunto",img:"calzone1.webp",preco:25.00,desc:"Calzone com deliciosa massa recheada de queijo, parmesão ralado, presunto e azeite."},
 {id:20,nome:"3 Queijos",img:"calzone2.webp",preco:25.00,desc:"Calzone com deliciosa massa recheada de queijo, parmesão ralado, requeijão e azeite."},
 {id:21,nome:"Calabresa",img:"calzone3.webp",preco:25.00,desc:"Calzone com deliciosa massa recheada de queijo, requeijão, cebola, calabresa defumada em cubos e parmesão."},
 {id:22,nome:"Margherita",img:"calzone4.webp",preco:25.00,desc:"Calzone com deliciosa massa recheada de queijo, parmesão ralado, requeijão, tomate, manjericão e azeite."},
 {id:23,nome:"Frango com Requeijão",img:"calzone5.webp",preco:25.00,desc:"Calzone com deliciosa massa recheada de queijo, parmesão ralado, requeijão, frango desfiado e azeite."},
 //Calzone
 {id:24 ,nome:"Nutella®",img:"molho1.webp",preco:10.90,desc:"Creme de avelã Nutella®."},
 {id:25,nome:"Maionese Grill",img:"molho2.wepb",preco:10.90,desc:"Maionese temperada, perfeita para conferir aquele toque grelhado aos nossos produtos."},
 {id:26,nome:"Molho Chiplote",img:"molho3.webp",preco:10.90,desc:"Molho à base de maionese sabor chipotle levemente picante."},
 {id:27,nome:"Pasta de Alho",img:"molho4.webp",preco:10.90,desc:"Irresistível e aromática, combina o sabor marcante do alho com um toque de cremosidade."},
 {id:28,nome:"Chocolate",img:"molho5.webp",preco:10.90,desc:"Sabor inconfundivelmente doce com toque intenso e cremoso do brigadeiro."},
 {id:29,nome:"OvomaltineⓇ",img:"molho6.webp",preco:10.90,desc:"Creme crocante da conceituada marca OvomaltineⓇ, com extrato de malte, cacau e avelã."},
 {id:30,nome:"Creme de Goiabada",img:"molho7.webp",preco:10.90,desc:"Goiabada cremosa com sabor doce e irresistível."},
 {id:31,nome:"Molho sabor Queijo Cheedar",img:"molho8.webp",preco:10.90,desc:"Nosso queijo do tipo “melt” traz cor e sabor intensos e marcantes."},
 {id:32,nome:"CatupiryⓇ",img:"molho9.webp",preco:10.90,desc:"Requeijão cremoso da tradicional marca CatupiryⓇ Original, de sabor delicado e inconfundível."},
 {id:33,nome:"Cream Cheese",img:"molho10.webp",preco:10.90,desc:"Queijo cremoso, levemente ácido e com um toque de doçura, traz suavidade ao paladar."},
 {id:34,nome:"Molho Tomate",img:"molho11.webp",preco:10.90,desc:"Receita exclusiva da Domino’s, feita com tomates frescos e selecionados, de toque levemente adocicado."},
 {id:35,nome:"Doce de Leite",img:"molho12.webp",preco:10.90,desc:"A combinação perfeita entre a doçura suave do leite condensado e o sabor caramelizado do doce de leite com textura aveludada que derrete na boca."},
 {id:36,nome:"Molho Americano",img:"molho13.webp",preco:10.90,desc:"Molho à base de maionese sabor picles."},
 //Molhos
 {id:37,nome:"Caprese",img:"sand1.webp",preco:25.00,desc:"Queijo de búfala e vaca, cebola, tomate, azeitona preta, manjericão e azeite."},
 {id:38,nome:"Carne Seca",img:"sand2.webp",preco:25.00,desc:"Cream cheese, carne seca, cebola, queijo e azeite."},
 {id:39,nome:"Meat & Bacon",img:"sand3.webp",preco:25.00,desc:"Cream cheese, pepperoni, presunto, calabresa, bacon e azeite."},
 {id:40,nome:"Calabresa",img:"sand4.webp",preco:25.00,desc:"Sanduíche com queijo, queijo parmesão, calabresa defumada em cubos, calabresa e cebola."},
 {id:41,nome:"Mexicano",img:"sand5.webp",preco:25.00,desc:"Queijo, cream cheese, carne seca, milho, cebola, pimentão, molho sabor queijo cheddar, condimento mexicano e azeite."},
 {id:42,nome:"Chicken & Bacon",img:"sand6.webp",preco:25.00,desc:"Cream cheese, bacon, frango grelhado, tomate, cebola, parmesão e azeite."},
 {id:43,nome:"Frango com 4 Queijos",img:"sand7.webp",preco:25.00,desc:"Queijo, cream cheese, frango grelhado, gorgonzola, parmesão e azeite."},
 {id:44,nome:"Frango,Cheedar & Bacon",img:"sand8.webp",preco:25.00,desc:"Queijo, molho sabor queijo cheddar, frango grelhado, bacon e azeite."},
 {id:45,nome:"Canadense",img:"sand9.webp",preco:25.00,desc:"Queijo, requeijão, presunto, bacon, champignon, molho thai sweet chili e azeite."},
 {id:46,nome:"Americano",img:"sand10.webp",preco:25.00,desc:"Queijo, requeijão, pepperoni, bacon, molho americano e azeite."},
 //Sanduiches
 {id:47,nome:"Churrosbread",img:"sobre1.webp",preco:35.00,desc:"Nossa saborosa massa recheada de muito doce de leite, coberta de açúcar e canela."},
 {id:48,nome:"Mini Churrosbread",img:"sobre2.webp",preco:25.00,desc:"Deliciosa massa recheada de muito doce de leite, coberta de açúcar e canela em versão individual."},
 {id:49,nome:"Bites Nutella®",img:"sobre10.webp",preco:25.00,desc:"Deliciosa sobremesa crocante com 16 pedaços de massa pan, cobertos com Nutella®."},
 {id:50,nome:"Canela Bites Ovomaltine",img:"sobre11.webp",preco:25.00,desc:"Deliciosa sobremesa crocante com 16 pedaços de massa pan, envoltos em açúcar e canela, e cobertos com creme de Ovomaltine®."},
 {id:51,nome:"Chocobread",img:"sobre12.webp",preco:25.00,desc:"Deliciosa massa recheada de muito brigadeiro de chocolate, coberta com creme de baunilha e granulado de chocolate."},
 {id:52,nome:"Mini Chocobread",img:"sobre13.webp",preco:25.00,desc:"Deliciosa massa recheada de muito brigadeiro de chocolate, coberta com creme de baunilha e granulado de chocolate em versão individual."},
 {id:53,nome:"Canela Bites Doce de Leite",img:"sobre21.webp",preco:25.00,desc:"Deliciosa sobremesa crocante com 16 pedaços de massa pan, envoltos em açúcar e canela, e cobertos com Doce de Leite."},
 {id:54,nome:"Canela Bites de  Chocolate",img:"sobre22.webp",preco:25.00,desc:"Deliciosa sobremesa crocante com 16 pedaços de massa pan, envoltos em açúcar e canela, e cobertos com Chocolate."},



];
function abrirProduto0(id) {
    quantidade=1;
    document.getElementById("qtd0").textContent=quantidade;
   document.getElementById("modal-teste0").style.display = "block";
 
   produtoAtual = produto4.find(p => p.id === id)
   document.getElementById("nome0").textContent= produtoAtual.nome;
   document.getElementById("img0").src = produtoAtual.img;
   document.getElementById("preco0").textContent=produtoAtual.preco;
   document.getElementById("desc0").textContent=produtoAtual.desc;


  }
 
  function mais0(){
  quantidade ++;
document.getElementById("qtd0").textContent= quantidade;
}
function menos0(){
    
   if (quantidade >1){
    quantidade --;
    document.getElementById("qtd0").textContent = quantidade;
   }

}
function fechar0(){

    document.getElementById("modal-teste0").style.display = "none";
} 
 document.addEventListener("keydown",function(event){
    if (event.key === "Escape") {
      fechar0()
    }
    })

function removerCarrinho(i){
  console.log("Recebi:", i);
  conteudocarrinho.innerHTML= "";
  carrinho.splice(i,1);
 
   renderizarCarrinho ()
  
}
function renderizarCarrinho (){
  conteudocarrinho.innerHTML="";
  total=0;
  for ( let i=0 ;i < carrinho.length; i++){
    console.log("Criando botão para:", i, carrinho[i].nome);
   
 conteudocarrinho.innerHTML +=  "<div class='card2'>" + "<img src= '" + carrinho[i].imagem + "' width='120px'>" +"<div class= 'porta3'>" + " <h3 >" + carrinho[i].nome + "</h3>" + "\n" + "<p class='p-2'>" + "R$" + carrinho[i].preco.toFixed(2) + "</p>" + "\n" + "<p class='p-2'>" + "Quantidade: " + carrinho[i].quantidade + "</p>" + "<button class='remover' onclick='removerCarrinho("+ i +")'>" + "Remover" + "</button>" + "</div>" + "</div>";
   total +=carrinho[i].preco*carrinho[i].quantidade;
  
    

  

  
  }
   totalcarrinho.innerHTML = total.toFixed(2);
}