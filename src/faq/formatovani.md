---
sidebar: auto
---

# Formátování

## TLDR for dummies :)

### Standardní text

Odstavce musíte oddělit dvěma entery (prázdným řádkem)

Pokud to neuděláte, ENTER
tak se to přeloží jako stále ta samá řádka


\*kurzíva\* = *kurzíva*

\*\*tučné\*\* = **tučné**

\*\*\*tučná kurzíva\*\*\* = ***tučná kurzíva***

\[Odkaz na Kostku\](http://www.d20.cz) = \[Odkaz na Kostku\](http://www.d20.cz) 


"Znegování" markdownu se provádí pomocí "\\". Tzn pokud nechci **tučně** ale \*\*tučně*\*\* tak to musím psát \\\*\\\*tučně\\\*\\\*. Zpětné lomítko \\ se tudíž píše jako \\\\ .


\# tohle je hlavní nadpis (H1). Tento musí být v dokumentu jen jeden (nejspíš na začátku jako titulka kapitoly)

\#\# tohle je "velký" nadpis (H2). Těch můžete mít kolik chcete

\#\#\# tohle je "menší" nadpis (H3). Víc a víc křížků pak vyrobí menší a menší nadpisy (všechny budou odkazovatelné)

...ukázka nebude, protože by to zbořilo levé menu tohodle dokumentu, ale jak nadpisy vypadají vidíte výše i níže. Ale že to jste vy tak takhle vypadá nadpis H4:

#### Fonty (Fate značky)

Fate symboly:

* \<span class="fate-font"\>+\</span\> = <span class="fate-font">+</span>
* \<span class="fate-font"\>-\</span\> = <span class="fate-font">-</span>
* \<span class="fate-font"\>0\</span\> = <span class="fate-font">0</span>
* \<span class="fate-font"\>o\</span\> = <span class="fate-font">o</span>
* \<span class="fate-font"\>c\</span\> = <span class="fate-font">c</span>
* \<span class="fate-font"\>a\</span\> = <span class="fate-font">a</span>
* \<span class="fate-font"\>d\</span\> = <span class="fate-font">d</span>





### seznamy

\* tohle vyrobí bodový seznam
  \* tohle vyrobá bodový seznam 2. úrovně (dvě mezery na začátku)
\* jednotlivé položky bodového seznamu *nemusí* být odděleny prázdnou řádkou

\* prázdná řádka ve skutečnosti vytvoří odskok mezi jednotlivými položkami
  
* tohle vyrobí bodový seznam
  * tohle vyrobá bodový seznam 2. úrovně (dvě mezery na začátku)
* jednotlivé položky bodového seznamu *nemusí* být odděleny prázdnou řádkou

* prázdná řádka ve skutečnosti vytvoří odskok mezi jednotlivými položkami


\1. pro číslovaný seznam 
\2. platí totéž

\1. pro číslovaný seznam 
\2. platí totéž



### Příklady (citace)

\> tohle je funkce "citace" a používáme ji na příklady

> tohle je funkce "citace" a používáme ji na příklady


Symbol ">" je potřeba dát na začátek každého odstavce. Platí obecná pravidla pro formátování textu.

\> Mezi dvěma odstavci citace musí být opět mezera, ale nemusíte se bát,

\> vodící linie z toho udělá jednu celistvou citaci

> Mezi dvěma odstavci citace musí být opět mezera, ale nemusíte se bát,

> vodící linie z toho udělá jednu celistvou citaci


\> \* tohle je bodový seznam v citaci
\> \* opět platí totéž ci výše pro 
\>   \* druhou úroveň

\> \* i pro odskoky

> * tohle je bodový seznam v citaci
> * opět platí totéž ci výše pro 
>   * druhou úroveň

> * i pro odskoky




### Rámečky (kartičky atp.)

\:\:\: card

Tohle bude základní rámeček. 

MUSÍTE tam napsat ono "card" a MUSÍTE to i zakončit třemi trojtečkami.
\:\:\:

::: card

Tohle bude základní rámeček. 

MUSÍTE tam napsat ono "card" a MUSÍTE to i zakončit třemi trojtečkami.
:::


\:\:\: card Tohle je nadpis

Karta s nadpisem
\:\:\:

::: card Tohle je nadpis

Karta s nadpisem
:::


\:\:\: card V rámečku lze opět dále formátovat

Za pomoci standardní \*kurzívy\*, \*\*tučného\*\* a \*\*\*tučné kurzívy\*\*\*

\* bodových seznamů

\> citací

\*\*uvnitř rámečků NEpoužívejte nadpisy\*\*
\:\:\:

::: card V rámečku lze opět dále formátovat

Za pomoci standardní *kurzívy*, **tučného** a ***tučné kurzívy***

* bodových seznamů

> citací

**uvnitř rámečků NEpoužívejte nadpisy**
:::


### Tabulky

\| hlavička \| bohužel \| musí      \| být     \|
\| ---      \| :---:   \| ---:      \| ---     \|
\| \*\*2. řádek\*\* \| je      \| zarovnání \| sloupce \|
\| není nutné snažít se mít \| ten zdroj nějak \| zvlášť \| hezky \|

| hlavička | bohužel | musí      | být     |
| ---      | :---:   | ---:      | ---     |
| **2. řádek** | je      | zarovnání | sloupce |
| není nutné snažít se mít | ten zdroj nějak | zvlášť | hezky |



## Ofiko složitá nápověda

 * [Tady máte nápovědu knihovny](https://vuepress.vuejs.org/guide/markdown.html), pokud myslíte že jí potřebujete a věříte si že se v tom vyznáte :)




