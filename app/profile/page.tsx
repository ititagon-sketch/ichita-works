import Image from "next/image";import Link from "next/link";import {EditorFrame} from "../shared";
const works=[
{src:"/archive/img_4183.webp",title:"大型木型",text:"構造を組み、連続する曲面を形にする。"},
{src:"/archive/img_4037.webp",title:"円環形状",text:"骨組みを基準に、全周の曲面を整える。"},
{src:"/archive/img_4023.webp",title:"骨組み",text:"形になる前の、寸法と輪郭の基準。"},
{src:"/archive/img_4707.webp",title:"曲面木型",text:"材料を重ね、削り、滑らかな面へつなぐ。"},
{src:"/archive/img_4230.webp",title:"仕上げの納まり",text:"角と曲面が交わる部分を手で整える。"},
{src:"/archive/img_4232.webp",title:"形状確認",text:"線を残し、面のつながりを確かめる。"},
{src:"/archive/img_5002.webp",title:"分割構造",text:"内側まで作り込み、組み合わせる。"},
{src:"/archive/img_5003.webp",title:"組み上がり",text:"別々に作った形を、ひとつの木型へ。"},
{src:"/archive/img_4402.webp",title:"一品製作",text:"用途に合わせた棚と台。型以外の仕事も。"},
{src:"/archive/img_3318.webp",title:"球面の骨組み",text:"多数の断面を組み、全体の形をつくる。"},
{src:"/archive/img_2611.webp",title:"大型造作",text:"木の表情を生かした、空間を構成する一品。"},
{src:"/archive/001080.webp",title:"木の乗り物 01",text:"木の色と形を組み合わせた四輪車。"},
{src:"/archive/001079.webp",title:"木の乗り物 02",text:"動物のような輪郭を持つ、遊びのための形。"},
{src:"/archive/001067.webp",title:"木の乗り物 03",text:"曲線で構成した、三輪の乗り物。"},
{src:"/archive/001051.webp",title:"木の乗り物 04",text:"濃淡のある木を組み合わせた二輪車。"},
{src:"/archive/001013.webp",title:"木の乗用玩具",text:"子どもが乗って動かせる、木の車。"},
{src:"/archive/001001.webp",title:"木の車",text:"木と既製部品を組み合わせた乗用車。"}
];
export default function Profile(){return <EditorFrame tab="profile.py" count={78}><p className="comment"># 02 / profile</p><h1 className="page-heading">つくっているもの</h1><p><b className="red">class</b> <b className="purple">IchitaWorks</b>:</p><div className="block indent"><p>field = <b className="string">&quot;木型製作&quot;</b></p><p>method = [<b className="string">&quot;手加工&quot;</b>, <b className="string">&quot;CAD&quot;</b>, <b className="string">&quot;3Dプリント&quot;</b>]</p><p>scale = <b className="string">&quot;一品もの / 試作 / 小ロット&quot;</b></p></div><section className="statement"><p>図面の中にある形を、<br/>手で触れられる形へ。</p><p>木を削る仕事から、データを形にする仕事まで。<br/>必要な方法を選び、ひとつずつ製作しています。</p></section><div className="data-grid"><article><small>01</small><h2>木型製作</h2><p>ノミとカンナによる手加工。長年の経験を、形の納まりと仕上がりに使います。</p></article><article><small>02</small><h2>試作・一品もの</h2><p>既製品では足りないもの、まだ答えのないものを、考えながら形にします。</p></article><article><small>03</small><h2>デジタル加工</h2><p>CADや3Dプリンターも道具のひとつ。手仕事と切り離さずに使います。</p></article></div><section id="archive" className="archive"><p className="comment"># archive / selected works</p><h2>製作例</h2><div className="works-grid">{works.map((work,index)=><figure key={work.src} className={index===0||index===3?"featured":""}><div className="work-image"><Image src={work.src} alt={work.title} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw"/></div><figcaption><small>{String(index+1).padStart(2,"0")}</small><h3>{work.title}</h3><p>{work.text}</p></figcaption></figure>)}</div></section><nav className="page-nav"><Link href="/">← main.py</Link><Link href="/process">process.py →</Link></nav></EditorFrame>}

