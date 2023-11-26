
https://github.com/KeepCodingWeb15/twitter-react


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# NOTES BOOTCAMP

# Hello React

Basic examples to understand React

## How to run

Este comando lo que hace es levantar un servidor estático en http://localhost:3000/

```
npx browser-sync start --server --files "./*.html" --no-notify --directory
```


Vamos hacer una aplicacion con React, en esta página encontramos toda la informacion https://create-react-app.dev/docs/getting-started


Con Vite sería similar  https://vitejs.dev/guide/  

Si lo instalaras con `vite`, está muy de moda esta empaquetador y podemos usarlo para construir nuestra app tbn

```sh
nmp create vite@latest
```

### Creamos aplicacion

Arranco el servidor `sparres.js` para conectar con el `front` lo usaremos como apoyo al backenk porque haremos un clon de twetter apoyado en este servidor.

```sh
➜  sparrest.js git:(main) ✗ npm start

> sparrest@1.0.0 start
> node index.js

JSON Server is running on port 8001
```

Ejecutams de manera global desde mi carpeta raiz de la app, la app la llamaré `twitter-react`

```sh
npx create-react-app twitter-react
cd twitter-react
npm start
```


veamos **twitter-react/package.json**

```js
  "scripts": {
    "start": "react-scripts start", // arranca el entorno de desarrollo
    "build": "react-scripts build", // hace la compilacion
    "test": "react-scripts test", // arranca el entronde testing preparado y herramientas actuales
    "eject": "react-scripts eject" // todo lo que hace react está encondido en este paquete "react-scripts"
    // Si yo quiero tocar la config de webpack no podemos, pero en algún caso si queremos
    // "eject" este comando lo ejecuto y react saca a la luz toda la configuracion para modificarla
```

Arrancamos con el comando de desarrollo y arranca en e puerto 3000, lo puedes cambiar si quieres,busca en la doc

```sh
npm run start
```

nos ha creado las carpetas del proyecto, si nos metemos en public veremos `twitter-react/public/index.html` vacío 

```sh
public
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

donde en la linea 31 `<div id="root"></div>` se va a enganchar el fichero de `js` codigo que vayamos generando

```html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>

```

nosotros en principio no hemos de tocar nada. Con el codigo que tiene de punto de entrada en `twitter-react/scr/index.js` generará el codigo que engancha en el html.

```sh
scr
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```
El punto de entrada en el `index,js` tenemos un componente principal que es lo que va a renderizar, está importándose desde el fichero `./App` el componenete `app` y es lo que vamos a renderizar. Está **envuelto** en un componenete de React que se llama `<React.StrictMode>`; este un un componenete d ela librería React que hace unos ciertos chequeos para ver si estamos utilizando react como debemos, nos lanzará si usamos metodos deprecados, warnings si nos dejamos algo, etc Si es un incordio lo puedes quitar.Cuando estés modo produccion desaparece.

```html
  <React.StrictMode>
    <App />
  </React.StrictMode>
```

Si nos metemos en el componente principal `App.js` está importando un logo `.svg`
```js
import logo from './logo.svg';

<img src={logo} className="App-logo" alt="logo" />
```
que se la pasa al `src` le pasa una url. Si lo hicieras a mano sería vastante complejo pero lo hace webpack por debajo. Lo mismo para el `App.css` . Por lo demás el **componente** App() es bastante sencillo, si modificas cosas las verás en el browser al momento.

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
---

### Listas

Voy a quitar `App.css` porque vamos a crearnos nuestro fichero nosotros. Voy a modificar ahora `App.js` dejando sólo lo siguiente dentro:

```js
function App() {
  return (
    <div className="App">
        <h1>
          Keepcoder´s! Don´t forget to learn React!
        </h1>
    </div>
  );
}

export default App;
```

elimino `reportWebVitals.js` y quito el `import reportWebVitals from './reportWebVitals';` de `index.js`


---

Vamos a crear un listado de tweets

Vamos al componente `App.js`

Creo carpet `scr/pages` que iremos almacendao nuestras paginas, dividiremos las páginas por concepto de productos `scr/pages/tweets` y me creo un `tweets.js`para meter el componente de listado de tweets, un componente solo es una funcion:

```js
// listado de tweets
const tweets = [
  {
    content:
      "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
    userId: 1,
    updatedAt: '2021-03-15T18:23:57.579Z',
    id: 1,
  },
  {
    content:
      "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
    userId: 1,
    updatedAt: '2021-03-15T18:24:56.773Z',
    id: 2,
  },
];

// con esto ya me saca los tweets por pantalla
function TweetsPage() {
    return (
    <div>
      <ul>
          <li>{tweets[0].content}</li>
          <li>{tweets[1].content}</li>
      </ul>
    </div>
  );
}

// lo exporto
export default TweetsPage;
```


Me voy al componente `src/App.js` y me importo `tweets.js` colocando el componente para que lo pinte `<TweetsPage></TweetsPage>`

```js
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
  return (
    <div className="App">
          <TweetsPage></TweetsPage>
    </div>
  );
}

export default App;
```

Pero esta no es la manera 

```js
        <li>{tweets[0].content}</li>
        <li>{tweets[1].content}</li>
```

Vamos a mirar como se renderizan listas. Si tienes un array de datos como el array `const tweets` y quieres transformarlo en un array de elementos. Com map vamos a randerizar listas:

```js
function TweetsPage() {
    return (
    <div>
      <ul>
        {
            tweets.map(tweet => (<li>{tweet.content}</li>))
        }
      </ul>
    </div>
  );
}
```

Ahora bien, cuando estas haciendo listas y cambios y millones de lineas, si le pones un identificados React no te dará problemas. Siempre que tengas un map o listas, el elemento revuelto ha de tener una `key id`.

```js
function TweetsPage() {
    return (
    <div>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

### Aplicando estilos

Vamos hacer un stylo básico en la lista con atributo `className` simplememnte definiendo dentro de `<div className="tweetsPage">` el atributo con el nombre ya vale, luego lo definimos el css y listo


```js
function TweetsPage() {
    return (
    <div className="tweetsPage">
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```
Defino `scr/TweetsPage.css`

```css
.tweetsPage {
    color: red
}
```

para incorporar el estilo css lo importas en la página `TweetsPage.js` así `import './TweetsPage.css'` . En ese momento se ha incorporado en la página porque coincide la clase. Esto lo permite Webpacj, no React.

Podríamos complicar este css y le podríasmos aplicar **condicionalmente** que si la clase es `dark` (añado variable booleana `dark`) si no aplica `light` --> lo podemos hacer porque tenemos acceso a JS `<div className={'tweetsPage'${dark ? 'dark' : 'light'}'}>`

```js
const dark = true;

function TweetsPage() {
    return (
    <div className={`tweetsPage'${dark ? 'dark' : 'light'}`}>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

te vas `` y le aplicas un estile nuevo

```css
.tweetsPage {
    color: red
}

.dark {
    background-color: aliceblue;
    color:aqua;
}
```

por cada valor se aplicará un estilo u otra . Imagínate que en vez de llegar por una variable llega por una propiedad.  `function TweetsPage({ dark }) {}`

```js
const dark = true;

function TweetsPage({ dark }) {
    return (
    <div className={`tweetsPage'${dark ? 'dark' : 'light'}`}>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

Si llega desde una prop imaginate que yo la puedo pasar desde `Àpp.js` desde el componente lo podemos controlar `<TweetsPage dark={false}>`. Le quitas la variable `const dark = true;` y se la pasas por el coponente

```js
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
  return (
    <div className="App">
          <TweetsPage dark={false}/>
    </div>
  );
}

export default App;
```

cuando son atributos bool¡anos puedes escribirlo así `<TweetsPage dark={false}>` o así `<TweetsPage dark/>`. Esto `<div className={'tweetsPage'${dark ? 'dark' : 'light'}'}>` se podría complicar mucho, por esto es bueno que te mires estas librerías

https://github.com/JedWatson/classnames

https://github.com/lukeed/clsx

Estas librerías permiten construir string pero con clases complejas podemos usar las utilidades `usage` de git


```sh
npm install --save clsx
```
`import clsx from 'clsx';` en `TweetPAge.js`

creas la variable `const className = clsx("tweetsPage", {dark: dark, light: !dark})` y se la pasas así `<div className={className}> `


```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
const className = clsx("tweetsPage", {dark: dark, light: !dark})
return (
    <div className={className}> 
    <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
    </ul>
    </div>
);
}
```

Entonces desde `App.js` en `<TweetsPage dark={false}/>` lo que le pases debe fucncionar igual. 

Has de tener cuidado porque hemos puesto en `TweetsPage.css` por ejemplo nada me impide que otro componente tuviera una clase que se llamara igual que `.tweetsPage` en el css y sobreescriba. Webpack lo que hace es meterlo todo en un css general y gana el ultimo. 

```css
.tweetsPage {
    color: red
}

.dark {
    background-color: aliceblue;
    color:aqua;
}
```

Para evitar colisiones hay una tecnica que se llama `module.css` que por cada clase que definas en ese fichero de aplicará un hashunico que te evitará colisiones de clases. Simplemente te creas un nuevo fichero `TweetsPage.module.css` y metes tus calses. Y ahora la aplicas:


```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
    //const className = clsx("tweetsPage", {dark: dark, light: !dark})
    const className = clsx(styles.tweetsPage, {[styles.dark] : dark})
    return (
        <div className={className}> 
        <ul>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                    ))
            }
        </ul>
        </div>
    );
}
```
fíjate que estmos sacando de `styles` los nombres de las clases que etsamos importanto `import styles from './TweetsPage.module.css'` yo se que está dentro de styles y crea un atributo con o que tenga dentro la varibale.



**estilos inline**


cada elemento html tu le puedes pasar un style. `<ul style={{ color: red; border: 1px solid }}>` Esto lo podemos hacertbn con React pero en vez de asarle strings, le pasas un objeto y el lo transforma. Para pasarle un objeto al atributo abres llaves y defines el objeto, imagina que solo quiero quitar los puntitos de cada tweet:
`<ul style={{ listStyle: 'none' }}>` la unica cosa del stilo css que queramos definir lo tenemos que definir en formato camelCase `listStyle` pero no es la mejor práctica, es mejor en clases, pero en algún momento quizás lo tengs que hacer. `TweetsPage.js`

```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
    //const className = clsx("tweetsPage", {dark: dark, light: !dark})
    const className = clsx(styles.tweetsPage, {[styles.dark] : dark})
    return (
        <div className={className}> 
        <ul style={{ listStyle: 'none', borderColor: 'red', padding; 24}}>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                    ))
            }
        </ul>
        </div>
    );
}
```


Estas son las maneras de estilos con React, no hay más. 
Vamos a practicar con alguna librería: https://styled-components.com/

Es otra manera de escribir ficheros css , soluciones que escribes componente JS pero escribiendo css. Creas componentes con determinados estilos. 

```sh
npm install styles-components
```

creo carpeta ``src/components` y dentro un componente `Button.js` 

```js
import styled from 'styled-components'

// creo componente
const Button = styled.button`
    cursor: pointer;
    boder-radius: 999px;
    boder-style: solid;
    border-width: 1px;
`;

export default Button;
```

voy al componente `App.js` y le paso el componente css `<Button/>` para ver si funciona 

```js
import TweetsPage from './pages/tweets/TweetsPage';
import Button from './components/Button.js';

function App() {
  return (
    <div className="App">
          <TweetsPage/>
          <Button/>
    </div>
  );
}

export default App;
```

Cualquiercomponente que le pase al button se generará porque es exactamente igual que un botóin pero que tiene estyles determinador `<Button onClick={() => console.log('clicked')}>Click me!</Button>` y aparecerá en console el mensje

Imagina que quieres crear dos variantes del botón, primaria y secundaria. Le puedes pasar una funcion

```js
import styled from 'styled-components';

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
  cursor: pointer;
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  background-color: ${props =>
    props.$variant === 'primary' ? accentColor : 'white'};
`;

export default Button;
```

pudes incrustar JS en el css de forma condicional por las `props` que le envíes

```js

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
  cursor: pointer;
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  background-color: ${props =>
    props.$variant === 'primary' ? accentColor : 'white'};
  color: ${props => (props.$variant === 'primary' ? 'white' : accentColor)};
`;
```

También puedes manejar la pseudoclase para que cambie el color cuando pases el ratón por encima

```js
  &:hover {
    background-color: ${props =>
      props.$variant === 'primary'
        ? 'rgb(26, 145, 218)'
        : 'rgba(29, 161, 242, 0.1)'};
  }
```


### UseEffects

Los ideal no es pintar unos tweets que tenemos en el archivo, lo ideal es traerlo desde una Api. Vamos a usar https://axios-http.com/docs/intro

```sh
npm install axios
```

Creo carpeta y fichero `src/api/client.js`

```js
import axios from 'axios';


const client = axios.client({
    baseURL: 'http://localhost:8000',
});

client.interceptors.response.use(response => response.data)

export default client;
```

cuando desarrolles fíjate que si pones esto baseURL: `'http://localhost:8000',` implicaría que tienes que mantener dos codigo distintos, uno para desarrollo y otro para producción. Ti tienes que decirle que vaya cambiando mientras trabajas tu o está en producción, o por ejempli si la api cambia, todo esto es un problema y siempre ha de ser fuera del codigo. SIEMPRE QUE HAYAN COSAS DE CONFIGURACIÓN DENTRO DEL CODIGO HAN DE PONERSE FUERA DEL CODIGO, como puede ser nuestra url donde va a estar nuestro endpoint.

PODEMOS PASAR UN FICHERO donde podemos definir este tipo de cosas. Cuado estés es desarrollo o en produccion le podrás inyectar diferentes ficheros de entorno. Siempre hay que hacer este tipo de cosas por variables de entorno. En el browser no hay variables de entorno, en el proceso de **buil** las va a ssustituir compilando, pero en el browser no existe nada de todo esto.

Creamos fichero con variables de entorn `.env`  https://create-react-app.dev/docs/adding-custom-environment-variables  aquí te están diciendo que puedes usar los ficheros que le siguen para cada caso.

`npm start`: .env.development.local, .env.local, .env.development, .env
`npm run build`: .env.production.local, .env.local, .env.production, .env
`npm test`: .env.test.local, .env.test, .env (note .env.local is missing)

por ejemplo nosotros ahora usaremos `/scr/.env.development` para `npm start`

```sh
# mira la documentación de Sparrest y verás los puertos de conexion
REACT_APP_API_BASE_URL = http://localhost:8001
```

cuanod ejecutes el comando tendrá prioridad `npm start` y ahora te vas al cliente y lo cambias

```js
import axios from 'axios';


const client = axios.client({
    baseURL: env.development.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data)

export default client;
```
Y ahora arrancas de nuevo la app `➜  twitter-react git:(11.Aplicando_estilos_2) ✗ npm start` con las variables de entorno cargadas. 

NUNCA en un entorno de desarrollo Front metas en un fichero de varoables de entorno, un valor que pueda ser crítico y que no quieras que lo hacken. En frontend todo lo que metas es público. LLévatelo a un backend a un proxyBackend pero no lo metas en nada del front. En el backend nadie tinee acceso, solo tu.

Ahora en vez de utilizar el cliente directamente me voy a crear un metodo `pages/tweets/service.js`

```js
import client from "../../api/client.js";

const tweetsUrl = '/api/tweets'; // lo que tiene el cliente

// creo una capita entre el cliente y el componente
// metodo
export const getLatestTweets = () => {
    return client.get(tweetsUrl);
}
```

Ahora desde mi componente tengo que hacer la llamada para que el componenete conecte con el servicio , el servicio con el api y yo lo pueda piuntar en pantalla, en lugar de puntar todoslos tweets que estan en la varibale const `tweets` de TweetsPages.js

¿cómo hacemos una llamada a este servicio? lo hacemos dentro del componente, llamando al componente `getLatestTweets`.
Tengo corriendo `sparrest`

En el controlador `TweetsPage.js`

```js
  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => )
```
 que debo hacer para que mi componente reaccine a la llegada de estos tweets? cuando el componente `TweetsPage` renderice y pasará por esta linea `getLatestTweets()` cuanod esta linea se ejecute se resulve la promesa `.then` y cuando se resuelva la promesa tengo que decirle a mi componente "ya tengo lo tweets, renderízate de nuevo con los tweets"... necesito un **estado** y el componente se renderiza de nuevo a ese nuevo estado. Esta respuesta `  getLatestTweets().then(tweets => )` será un array por lo tanto 

 ```js
 import { useState } from 'react';

const [] = useState([])
 ```

lo incializo con una array vacío, para que siempre sea un array vacío. Y le diré mi estado van a ser `tweets` y la función para hacer que mi componente reaccione  a esos tweets y almacenarlos será `setTweets`


 ```js
const [tweets, setTweets] = useState([])
 ```

y en cuando tengamos las respuesta renderizada le dicesimos "guarda los tweets que te lleguen 

```js
  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => setTweets(setTweets));
```

Quedando así ---- > cambio `<li key={tweet.id}>{tweet.content}</li>` a `<span>{tweet.message}</span>` porque en mi bbdd el mensaje está así

```js
import clsx from 'clsx';
//import './TweetsPage.css'
import styles from './TweetsPage.module.css'
import { getLatestTweets } from './service';
import { useState } from 'react';


function TweetsPage({ dark }) {
  // inicializa array de tweets vacío con la funcion
  const [tweets, setTweets] = useState([]);
  //   const className = clsx('tweetsPage', { dark, light: !dark });
  const className = clsx(styles.tweetsPage, {
    [styles.dark]: dark,
    [styles.light]: !dark,
  });

  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => setTweets(tweets));
  
  return (
    <div className={className}>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.message}</li>
                ))
        }
      </ul>
    </div>
  );
}

// lo exporto
export default TweetsPage;
```

Verás al ejecutarlo que te da errores porque se está ejecutanto en bucle, has de hacer una llamada al `useEffect()` y dentro le paso la llamada

```js
import { useEffect, useState } from 'react';

useEfFect(() => {
  // esto devuelve una promesa que me devuelve el resulatdo de este api
  getLatestTweets().then(tweets => setTweets(tweets));
})
```

Fíjate que si te da error porque no carga los tweets podemos poner un `console.log()`
```js
import axios from 'axios';

// le ponemos un CHIVATO
console.log(process.env.REACT_APP_API_BASE_URL); // Esto debería imprimir "http://localhost:8001"

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data);

export default client;
```

vete a la página `bundle` y busca el error en la linea que te diga y buscar qué ha imprimido la linea que le hemos puesto, si no imprime lo que debe es que hay probelmas

```js
console.log("http://localhost:8001"); // Esto debería imprimir "http://localhost:8001"

const client = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: "http://localhost:8001"
});
```

### useEffect 2

También le podrías decir, cada vez que cambia el valor `dark` ejecuta este efecto, si no cambia no

```js
function TweetsPage({ dark }) {
//   // inicializa array de tweets vacío con la funcion
//   const [tweets, setTweets] = useState([]);

//   //   const className = clsx('tweetsPage', { dark, light: !dark });
//   const className = clsx(styles.tweetsPage, {
//     [styles.dark]: dark,
//     [styles.light]: !dark,
//   });



//   useEffect(() => {
//     getLatestTweets().then( tweets => setTweets(tweets)).catch(error => {
//       // Añade aquí el manejo de errores
//       console.error("Error fetching tweets:", error);
//     });
  }, [dark]); // si no cambia este valor no se ejecuta
```

si el render se ha ejecutado por otra razón no vamos a camviar el efecto pero si cambiase la propiedad si.
Tu puedes meter tantes `useEffect` que te de la gana

```js
useEffect(() => {
    documento.title = dark ? 'dark' : 'light';
}, [dark]);
```

react va a evaluar las dependecias reales de tu Effect y te dirá si has d eponer algo entre [] si estás dependiendo de el.

Opcionamente puede devolver una function y esta función es ejecutada antes de proximo efecto, esta funcion será llamada eln el proximo efecto pero como solo habra 1

```js
  useEffect(() => {
    getLatestTweets().then( tweets => setTweets(tweets));

    return function () {
        console.log('Exit');
    };

  }, []);
```

### React devTolls

Extension diposnible para navegadores 
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi


### auth

Creamos carpeta y archivo `pages/auth/LoginPage.js` vamos a meter el componente Login para el usuario.
NOs creamos a crear su propio service `pages/auth/service.js`.

Dentro de LoginPage creo el formlario

```js
import Button from '../../components/Button'


function LoginPage() {
    return <div>
        <h1>Los in to Twiiter</h1>
        <form>
            <input type="text" name="username"/>
            <input type="password" name="passwort"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```

Voy a mi compoente `App.js` le quito el button que ya no sirve y le añadon el LoginPage

```js
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage'



function App() {
  return (
    <div className="App">
         <TweetsPage/>
         <LoginPage/>
    </div>
  );
}

export default App;
```

Si mi usuario está logeado muestrame este login con tweets y si no el otro. Para hacer eso hay que llamar a la api para ver si está logado, cuando el usario le de al login se dispara el evento "sumit" del formlario y cuando se dispare tendré acceso a lo que tengan esos imputs. Es decir en el formulario trabajo con el componente `<form onSubmit={}>` y ahí dentro me voy a crear una función llamada `handleSubmit` --> `<form onSubmit={handleSubmit}>` y arriba me creo la función que va  arecibir el evento:: (le pinto a ver que tiene dentro `console.log(event.target)`)

```js
import Button from '../../components/Button'


function LoginPage() {
    const handleSubmit = (event) => {
        console.log(event.target)
    };


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <input type="password" name="passwort"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```

por defecto cuando hacer un `submit` estás forzando una recarga de la página , lo hacen todos los formularios de html, pero tengo un método para decirle, no ejecutes tu comportamiento por defecto. `event.preventDefault();` ahora puedes acceder a cada inspecction log del browser que ha imprimido, Además tiene acceso a cada elemento dentro del `target` : `console.log(event.target)` por ejemplo el nombre de usuauio `console.log(event.target.username)` `console.log(event.target.password)`y te devolverá `<input type="text" name="username">` Si quieres saber el valor, accederás justo al valor que ha tecleado el usuairo `console.log(event.target.username.value)` por consola. 

Con esta informacion tendremos un metodo que lo llamaremos login, que ele puedo pasar un username y un password

```js
import Button from '../../components/Button'


function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault();

        login({
            username: event.target.password.value, 
            password: event.target.password.value,
        });
    };


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username"/>
            <input type="password" name="passwort"/>
            <Button type="sumbit" $variant="primary">
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```

Ahora nos creamos este metodo en el `servicio.js` y lo vamos a importar

```js
import client from '../../api/client';  // Importa una instancia preconfigurada del cliente Axios desde una ubicación específica en el proyecto.


export const login = (credentials) => {  // Exporta una función llamada 'login' que toma un objeto 'credentials'.
    return client  
        .post('/auth/login', credentials)  // Realiza una petición POST a la ruta '/auth/login' con las credenciales proporcionadas.
        .then(response => console.log(response));  // En caso de éxito, registra la respuesta en la consola.
}

```

ahora vamos a `pages/auth/LoginPage.js` e importamos el login `import { login } from './service';` desde servicio. Ahora si teclas cualquier cosa 


Creamos un metodo en client.js

```js
export const setAuthorizationHeader = token =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);
```

si cuando tengas le token llamas al metodo del cliente axios estarás almacennano en una configuracion de axios y cada peticion del cliente saldrá con esta cabecera de forma predefinida. En el servicio.js te irá muy bien porque tienes un objeto co naccesToken 

```js
//.then(response => console.log(response)); 
.then(({accessToken}) => setAuthorizationHeader(accessToken));
```

para que cada vez que haga login lo guarda en el cliente y me despreocupo.
Ahora cuendo esté logeado le cambio el listado.

**Compoartieno estado**

El componente `App.js` es el padre de `<TweetsPage/>`y `<LoginPage/>` ppero por otro lado tenemos `LoginPage()` que es el que llama al método de login()
```js
function LoginPage() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        await login({
            username: event.target.username.value, 
            password: event.target.password.value,
        });
    };
```
y cuando resuelve este wait login en etse punto el usuario está logeado y nosotros tenemos que haces en se momento la vista cambie de login al listado, pero don de se que estoy logaedo es aquí. 

App es qle que tiene que decidir que cuando está logueado se pinta una cosa u otroa, entonces necesitamos una comunicacion entre `App`y `loginpage` porque es el que sabe que el usuari está logueado pero el que lo necesita saber es App.

Entonces yo puedo crear un **estado** en `App` y en función de este estado  

`const [isLogged, setIsLogged] = useState(false);`

yo soy capaz de definir aquí
```js
    <div className="App">
         <TweetsPage/>
         <LoginPage/>
    </div>
```
si pinto un componente u otro y lo hacemos así 

```js
import { useState } from 'react';



function App() {
  const [isLogged, setIsLogged] = useState(false);
  return
    <div className="App">{
      isLogged ? <TweetsPage/> : <LoginPage/>}</div>;
    }
```

Pero como podemos carmbiar el estado si el que sabe es loginPage. Cuando tenemos un evento nativo de html, esto no es más que una funcion, que se ejecutará cuando se lanza un evento. Si quieres definir un evento de login en loginPage para avisar al mundo exetior que ha acurrido un login, pues de fines un evento, defines una `propp` de tipo función `loginPage.js` le paso `onLogin` y lo comunico `onLogin()` a quien quiera escucharlo

```js
function LoginPage( {onLogin} ) {
    const handleSubmit = async (event) => {
        event.preventDefault();

        await login({
            username: event.target.username.value, 
            password: event.target.password.value,
        });
    };

    onLogin()
```

`onLogin` en `loginPage` permite recibir una propiedad de tipo función ¿y quién está renderizando `loginPage`? pues `App()` ¿qué tiene que hacer App para decirle a loginPage "avísame cuando hagas un login"? Le tienes que pasar el `onLogin` en <LoginPage/>. De arriba hacia abajo siempre le puedes pasar una función. Y se la paso aquí `<LoginPage onLogin={}/>` y la llamo `handleLogin` y la meto dentro para que escuche `<LoginPage onLogin={handleLogin}/>` yy esa función dentro la creo antes  `const handleLogin = () => setIsLogged(true);`:

```js
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true);
  return
    <div className="App">{
      isLogged ? <TweetsPage/> : <LoginPage onLogin={handleLogin}/>}</div>;
}

export default App;

```

Así lo que hace App es pasarle a loginPage la propiedad onLogin pasandole la función handleLogin.

Estamos subiendo el estado al **padre**, que es el que decide si pinta un login u otro. Esto se llama en React elevar el estado. Al final cuando yo tengo un estado viviendo en un componente y alguien por encima o al lado, un hermano, requiere de la informacion de ese estado hay que buscar un punto comun en el arbol y subir ese estado y a partir de ahí ya puede llover hacia abajo hacia otros. Imagínate que que este `<TweetsPage/> ` necesitase también saber si el usuario está logueado o no, podrías pasarle tambien este `<TweetsPage onLogin={isLogged}/>` es decir cuando sencesites pasar entre hermanos `isLogged ? <TweetsPage onLogin={handleLogin}/> : <LoginPage onLogin={handleLogin}/>}</div>` no existe una manera directa de comunicarse entre hermanos siempre hay que hacerlo a través de un padre Y es lo que se llama elevar el estado.

Resumiendo:

```js
App()
const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
```
A través de `onLogin` `<LoginPage onLogin={handleLogin}/>` se la paso a `loginPage()` a través de 

```js
function LoginPage( {onLogin} ) {

  // cuando se produce un login correcto

  // se llama a este evento
  onLogin(); // que es en realidad esta funcion : const handleLogin = () => setIsLogged(true);
```

esto hará que se cambie el estado y se renderice `<LoginPage`


---
https://codesandbox.io/

---

### Formularios: inputs

Ahora queremos que el login esté disponble cuando el usuario rellene los dos campos, cuando los dos tenga valor avilitamos el login. Para saber como están los dos inputs será responder cuando cambie el evento.

La manera de saber seré responder al alemento concreto de cada input y el elemento será `onChange` y se la pases para ver que te da:

```js
// import Button from '../../components/Button'
// import { login } from './service';


// function LoginPage( {onLogin} ) {
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         await login({
//             username: event.target.username.value, 
//             password: event.target.password.value,
//         });
//     };

//     onLogin();
    
    const handleUsernameChange = (event) => {
        // vemos que tiene
        console.log(event.target.value);
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        console.log(event.target.value);
    };

    // return <div>
    //     <h1>Los in to Twiiter</h1>
    //     <form onSubmit={handleSubmit}>
              <input type="text" name="username" onChange={handleUsernameChange}/>
              <br/>
              <input type="password" name="password" onChange={handlePasswordChange}/>
//             <Button type="sumbit" $variant="primary">
//                 Log in
//             </Button>

//         </form>
//     </div>
// };

// export default LoginPage
```

esto te dispara en consola lo que el usuario ponga. Para cambiar en el componente se necsita un render, en algun moemento hay que disparar un render. Cuando queremos que se renderice solo hay una manera, tengo que forzar un **estado**, els lo unico que hace que el componenete se renderice.

Alamcenamos los valores en el estado


```js
function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     await login({
    //         username: event.target.username.value, 
    //         password: event.target.password.value,
    //     });

    //     onLogin();
    // };

    const handleUsernameChange = (event) => {
        // vemos que tiene
        //console.log(event.target.value);
        setUsername(event.target.value)
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        // console.log(event.target.value);
        setPassword(event.target.value)
    };

```

ahora falta además decirle al boton habilitate en funcion de los valores

```js
// import Button from '../../components/Button'
// import { login } from './service';
import { useState } from 'react';


function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     await login({
    //         username: event.target.username.value, 
    //         password: event.target.password.value,
    //     });

    //     onLogin();
    // };

    const handleUsernameChange = (event) => {
        // vemos que tiene
        //console.log(event.target.value);
        setUsername(event.target.value)
    };

    const handlePasswordChange = (event) => {
        // vemos que tiene
        // console.log(event.target.value);
        setPassword(event.target.value)
    };

    // cada vez que el estado ambia y pasa por esta linea se está recalculando el estado
    const disabled = !(username && password);


    // return <div>
    //     <h1>Los in to Twiiter</h1>
    //     <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleUsernameChange}/>
            <br/>
            <input type="password" name="password" onChange={handlePasswordChange}/>
            <br/>
            <Button type="sumbit" $variant="primary" disabled={disabled}>
//                 Log in
//             </Button>

//         </form>
//     </div>
// };

// export default LoginPage
```

fíjate que nos hemos creado una variable `const disabled = !(username && password);` para calcular el estado de dos estados, no hemos de crear otro estado. Hemos calculado y derivado y esa linea se ejecutará siempre para pasarselo al button para la propiedad `disabled` para activar y desactiva


Imagínate que quieres poner un valor inicla a estas cajas . Puedes pasar el atributo `value` y decir que lo muestre de inicio

```js
function LoginPage( {onLogin} ) {
    const [username, setUsername] = useState('Alex');
    const [password, setPassword] = useState('');
```
```js
<form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleUsernameChange} value={username}/>
```

a esto se llama tener el input controlado pero siempre lo harás con el `onChange={} ` porque le has dicho que muestre el valor y no podrías cambiar el valor fijo que le has dicho, onChang te permite capturar el evento. Otra opcion es dejarlo a medias, sin valor pero capturando el onchange porque necesitas capturar el valor que estas tecleando pero no necesits controlar el input son valor inicial.


A mi me gusta cuando trabajo con el modo controlado , ya soy yo quien tiene el control de la informacion no es el DOM poruqe yo ya le estoy diciendo aquí `value={username}`lo que quiero en la caja y esos datos están aquí  `const [username, setUsername] = useState('Alex');` por lo tanto me gusta cuando trabajo así dejar de lado el 
`username: event.target.username.value`
`password: event.target.password.value,`

y dejarlo así tomando los tados del estado sin más, que es lo mismo.

```js
        await login({
            username, 
            password,
        });
```


**refactoring**

```js
    // const [username, setUsername] = useState('Alex');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
      username: 'Alex';
      password: '';
    });
```

```js
    // await login({
    //     username, 
    //     password,
    // });

    await login(credentials);
```

```js
import Button from '../../components/Button'
import { login } from './service';
import { useState } from 'react';


function LoginPage( {onLogin} ) {
    // const [username, setUsername] = useState('Alex');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
      username: 'Alex';
      password: '';
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // await login({
        //     username, 
        //     password,
        // });
        await login(credentials);

        onLogin();
    };

    const handleUsernameChange = (event) => {
        // setUsername(event.target.value)
        setCredentials({
            username: event.target.value,
            password: credentials.password,
        });
    };

    const handlePasswordChange = (event) => {
        // setPassword(event.target.value)
        setCredentials({
            username: credentials.username,
            password: event.target.value,
        });
    };

    // refactoring
    const disabled = !(credentials.username && credentials.password);


    return <div>
        <h1>Los in to Twiiter</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                onChange={handleUsernameChange} 
                value={credentials.username}/>  // refactoring
            <br/>
            <input 
                type="password" 
                name="password"
                onChange={handlePasswordChange}
                value={credentials.password}/> // refactoring
            <br/>
            <Button type="sumbit" $variant="primary" disabled={disabled}>
                Log in
            </Button>

        </form>
    </div>
};

export default LoginPage
```


cuando tengo un estado que depende del anterior lo puedo usar de manera función, es decir:

```js
    const handleUsernameChange = (event) => {
        setCredentials({
            username: event.target.value,
            password: credentials.password,
        });
    };
```

se podría hacer

```js
  const handleUsernameChange = (event) => {
      setCredentials(currentCredentials => ({
          username: event.target.value,
          password: currentCredentials.password,
      }));
  };
```

y lo mismo para password, pero si inspeccionas un poco este input tiene una propiedad name.

```html
            <input 
                type="text" 
                name="username" 
```

y no es casualidad que lo haya llamando como el atributo del estado, es decir, en este caso el `username` es lo mismo que `[event.target.name]`

```js
  const handleUsernameChange = (event) => {
      setCredentials(currentCredentials => ({
          [event.target.name]: event.target.value,
          password: currentCredentials.password,
      }));
  };

  const handlePasswordChange = (event) => {
      setCredentials(currentCredentials => ({
        username: credentials.username,
        [event.target.name]: event.target.value,
      });
  };
```

es decir el elemento de `handleUsernameChange` deja el password como estaba y actualiza username `[event.target.name]: event.target.value,` y el elemento del password deja el username como estaba y actualiza el passwrod. Le estas diciendo, dejame lo que tuvieses y me sistutuyes esta propeidad `[event.target.name]: event.target.value,` con lo cual le podrías decir esto:

```js
  const handleUsernameChange = (event) => {
      setCredentials(currentCredentials => ({
        [event.target.name]: event.target.value,
        ...currentCredentials,
      }));
  };

  const handlePasswordChange = (event) => {
      setCredentials(currentCredentials => ({
        ...currentCredentials,
        [event.target.name]: event.target.value,
      });
  };
```

y ahora ya estas dos funciones son la misma y como son la misma puedo decir

```js
  const handleChange = (event) => {
      setCredentials(currentCredentials => ({
          ...currentCredentials,
          [event.target.name]: event.target.value,
      }));
  };
```

y esta funcion se la puedo pasar tanto a uno como al otro 

```html
            <input 
                type="text" 
                name="username" 
                onChange={handleChange} 
                value={credentials.username}/> 
            <br/>
            <input 
                type="password" 
                name="password"
                onChange={handleChange}
                value={credentials.password}/>
            <br/>
```

es buena practica trabajar con inputs en html porque has de saber que hay.

Otra cosa que podemos hacer es sacar credentials para hacerlo más limpio

```js
// const disabled = !(credentials.username && credentials.password);
const {username, password} = credentials;
const disabled = !(username && password);
```

de los imputs no hay muchos mas `controlados`, `si controlar`. La regla es : mantendlos sin cotrolar hasta que te haga falta controlarlo.

https://react.dev/reference/react/components


---

### persistir_Token


Si te logueas ves el estado pero si haces un refresh pierdes la página, esto es porque haces un reinicio y lo que habia en memoria lo ha perdido. Necesitamos guardar el `token` para persistir un poco más. ¿localStorage y sesionStorage? Sesion se borra al cerrar el navegador y te valdría si haces un refresh, cuando cierras el navegador lo pierdas. Si usas una cookies

vamos a guadar el token en el localStoreg para que nos olvidemos de él cuando lo tengamos. Ahora se lo enviamos al api a través de axios pero lo que queremos es persistir esa info. Y luego cuando la aplicacion arranque y levante de nuevo, lo primero que tendremos que hacer es leer si tenemos token o no tenemos token. Y en funcion de leer si tenemos token o no, el estado logeado lo podemos sacr de ahí.

```js
function App() {
  const [isLogged, setIsLogged] = useState(false);
```
si tenías tokenponte como que lo tienes y si no ponte como que no estabas logueado.

Creamos una carpeta `utils/storage.js` no me gusta usarlo como hemos hecho porque si el día de mañana lo tengo que cambiar no me gusta estar buscando , si tengo centralizada la logica lo puedo combiar facilmente 

```js
const storage = {
    get(key) {
        const value = localStorage.getItem(key)
        if(!value) {
            return null
        }
        return JSON.parse(value)
    },

    set(key, value) {
        localStorage.setItem(key. JSON.stringify(value))
    },

    remove(key) {
        localStorage.removeItem(key)
    },

    clear() {
        localStorage.clear()
    },
};

export default storage;
```

esto es bueno porque si no irás a la app y esto esta controlado, que utilicen el objeto `storage`. Nos vamos a`service,js` y que lo persista 

```js
import client from '../../api/client';  // Importa una instancia preconfigurada del cliente Axios desde una ubicación específica en el proyecto.


export const login = (credentials) => { 
    return client  
        .post('/auth/login', credentials)  
        .then(({accessToken}) => setAuthorizationHeader(accessToken));  
}

```

a esto

 ```js
import client from '../../api/client';
import storage from '../../utils/storage';


export const login = (credentials) => { 
    return client  
        .post('/auth/login', credentials)  
        .then(({accessToken}) => {
            setAuthorizationHeader(accessToken);
            storage.set('auth', accessToken) 
        });
}
 ```

 con esto cuando hagamo un login conseguimos que nuestro locastorage asociado tenga persistido el token. Con esto cuando hagamos un login coseguimos que nuestro localStoreg tenga persistido el token.


 Ahora cuando refrescas lo pierdes, entonces ahora cuando arranques la aplicacion tendrás que leerlo y dos cosas, po run lado tendría que servir para inicializar el estado y por otro, si lo tienes, tienes que setearlo al cliente de axios para olvidarte de él.

 En el punto de arranque de la aplicacion `index.js` antes de que la aplicacion renderice leeré el token:

 ```js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import storage from './utils/storage';

// podrías tener todas las caves tipadas para no quivocarte 'auht'
const accesToken = storage.get('auth'); 
// inicicalizo el cliente de axios, guardar allí
if (accesToken) {
  setAuthorizationHeader(accesToken);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />,
//   </React.StrictMode>,
// );
 ```

Ahora ya sabes si tienes el token. Ahora podrías decirle a `App` en lugar de incializar a flase porque  no lo inicializas desde una variable de fuera `initialyLogen` y usar esta valos para incicializar ; 

```js
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);
```

y ahora te vas a la entraga de tu aplicacion `index.sj` y le dices que `initialyLogged` está inicialmente logueado si tengo token (doble negacion es una afirmacion) se hace así `!!accesToken` porque es un string, si no tiene valor lo llevas a false y si tiene valor lo llevas a true y si lo niegas dos veces lo estas conviertiendo a booleano, asegurarte que lo que le envias es un booleano, es lo mismo quwe `{accesToken ? true : false}`

```js
  <React.StrictMode>
    <App initiallyLogged={ !!accesToken }/>,
  </React.StrictMode>,
```

entonces si tu aplicación arranca y tienes token:

```js
const accesToken = storage.get('auth'); // arranca
if (accesToken) {setAuthorizationHeader(accesToken);} // tienes token:
``` 

le dices a la palicacion : empieza logueado : `<App initiallyLogged={ !!accesToken }/>,`. Ahora cuando refrescas o abres otra ventana persiste el token porque se guarda asociado a ese dominio.

### Logout


Vamos a `TweetPage.js` y lemetemos un boton al DOM para que pueda `<Button>LogOut</Button>`

```js
  return (
    <div className={className}>
      <Button>LogOut</Button>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>
                  <span>{tweet.message}</span>
                </li>
                ))
        }
      </ul>
    </div>
  );
}
```

qué ha de hacer el boton para logaerse:
1 - guardamos token en localStoreg
2 - guardamos el token en axious
3 - cambiamos el estado

UN logout lo mismo a la inversa:
- Bora localStoreg
- Borrar clienet axius
- cambiar el stado

Voy a `service.js`

```js
// import client, { setAuthorizationHeader } from '../../api/client'; 
// import storage from '../../utils/storage';


// export const login = (credentials) => {  // Exporta una función llamada 'login' que toma un objeto 'credentials'.
//     return client  
//         .post('/auth/login', credentials)  // Realiza una petición POST a la ruta '/auth/login' con las credenciales proporcionadas.
//         .then(({ accessToken }) => {
//             setAuthorizationHeader(accessToken);
//             storage.set('auth', accessToken) // llamaremos a la clave auth o token o lo que quieras
//         }); 
// };
export const logout = () => {
    return Promise.resolve().then(() => {
        storage.remove("auth")
    })
}
```

como en cliente tengo un metodo `setAuthorizationHeader` para autorizar al cliente, le hago otro para limpiar

```js
// export const setAuthorizationHeader = token =>
//   (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

export const removeAuthorizationHeader = () =>
  delete client.defaults.headers.common['Authorization'];
```

Ahoa ya tengo el metodo para borrarlo. Me voy a `services.js` y convoco el metodo para remove

```js
export const logout = () => {
    return Promise.resolve().then(() => {
        removeAuthorizationHeader(); 
        storage.remove("auth")
    })
}
```

cuando haga un logout se borrarrá . Ahora nos queda cambiar el **estado**. En `app` tienes un metodo para poner el login a true, pues te creas uno para ponerlo a false. 

```js
  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en flase
```

y se lo pasas a `<TweetsPage/>` porque en `<TweetsPage/>` es donde tienes el button de cambio de estado

```js
// function App({ initiallyLogged }) {
//   const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en true

  return (
    <div className="App">{
      isLogged ? <TweetsPage onLogout={handleLogout}/> : <LoginPage onLogin={handleLogin}/>}</div>
  );
}
```

por hacerlo como está en el login, nos vamos a `<TweetsPage /> ` que la tenemos en Tweetpages.js y le pasamos el `onLogout` -> `function TweetsPage({ dark, onLogout }) {` y luego capturo el click para llamar al logout en la función del return `<Button>LogOut</Button>` le paso la función `{handleLogout}`

```js
return (
  <div className={className}>
    <Button onClick={handleLogout}>LogOut</Button>
    <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
      {
          tweets.map(tweet => (
              <li key={tweet.id}>
                <span>{tweet.message}</span>
              </li>
              ))
      }
    </ul>
  </div>
);
```

y ahora me creo la funcion `handleLogout` más arriba

```js
  const handleLogout = async () => {
    await logOut();
    onLogout();
  }
  
    return (
    <div className={className}>
      <Button onClick={handleLogout}>LogOut</Button>
      <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>
                  <span>{tweet.message}</span>
                </li>
                ))
        }
      </ul>
    </div>
  );
```

Ahora falta enmaquetar el login

---

### StrictMode

`<React:StrictMode>` hace de vigialnte dentro de app, nos ayuda sólo àra enontrar bug que estemos incurriendo. `index.js`

```js
  <React.StrictMode>
    <App initiallyLogged={ !!accesToken }/>,
  </React.StrictMode>,
```

si te vas a modo produccion no lo usa `npx` porque no quiero instalar `npx serve -s buils` con esto te da un ip y es la versión de produccion


---


### componentes de layout

Este tipo de componente se utiliza para encapsular el diseño común de varias páginas de la aplicación, como la cabecera (header), el pie de página (footer), barras laterales (sidebars) y otros elementos de navegación.

Un componente de layout ayuda a:

1. Mantener la Consistencia: Asegura que elementos comunes como el header, footer y sidebars se mantengan consistentes a través de diferentes páginas.
2. Reutilización de Código: Permite reutilizar el mismo layout en diferentes partes de la aplicación, reduciendo la duplicación de código.
3. Separación de Preocupaciones: Separa la lógica de layout de la lógica específica de la página, lo que hace que el código sea más limpio y más fácil de mantener.
4. Facilitar Cambios en el Diseño: Si necesitas hacer un cambio que afecte a todas las páginas (como modificar el header), solo necesitas hacerlo en el componente de layout.
5. Organización del Código: Ayuda a estructurar y organizar el código de manera más eficiente.

Creo carpeta y files `components/layoaut/Header.js` y `Layout.js` y `Footer.js`


```js
function Footer() {
    return <footer>@2023 Keepcoding</footer>
}

export default Footer;

```

Podríamos meter más cosas de acuerdo?, simplemente para tener un poco de estructura, cuando nosotros hacemos componentes, siempre hay una duda es cómo componer. Sí creamos componentes y nos vamos a anidando, o si dejamos la responsabilidad al padre a través de los Children o de children o de otra cualquiera otra propiedad. Yo aquí tengo un footer un componente Footer, que es un tag punter.Con este texto. Es responsabilidad de este elemento de este componente?. Este texto, pues, depende, diría, no diría ni que sí, ni que no.En algunos casos puede que sí. En algunos casos puede que no. Si yo quiero reutilizar este componente footer pues probablemente probablemente la responsabilidad de definir este texto o cualquiera que sea la cosa que yo ponga dentro, vale porque ahora mismo este sitio es bastante sencillo pero yo podría tener un menú con enlaces o son los típicos shooters de cualquier página de¿Quién es la responsabilidad, no demostrar lo que tiene ese componente, Pues ya os digo: depende, depende y aquí no hay una.Hay una verdad única en este caso como este componente footer En mi aplicación va a ser el mismo y único y siempre va a mostrar lo mismo.Le voy a dejar que sea él que tenga la responsabilidad y defina lo que lo que va a emprender, lo que tiene que mostrar si la responsabilidad la queremos sacar de este componente para que sea reutilizable porque imaginaos, que incluso puede ser una librería de componente lo que estamos desarrollando y tenemos 1 de ellos componente footer pero yo no puedo decidir sobre qué contenidoponer dentro. 

Pues entonces, ¿cómo podemos? ¿Cómo podemos traspasar la responsabilidad a otro al consumidor de este componente?Pues, muy sencillo **props** pasar props, en principio si yo le digo, por ejemplo, Children, 


```js
function Footer( {children} ) {
    return <Footer>@2023 Keepcoding</Footer>
}

export default Footer;
```

`children`, siempre es la más la más bonita en el sentido de que lo use lo va a poder utilizar utilizando `Footer` y poniendo el contenido dentro del `tag` pero cualquier propiedad que yo necesite me la puedo crear, imaginaos tengo un `layout` que puedo definir pásame una propiedad al componente de la layout para lo que sale a la izquierda, lo que sale a la derecha, lo que sale arriba, lo que sale abajo. No sé que al final esto es práctica buen ojo. También es importante si tienes buena mano en la maquetatación, probablemente te ayude a a componentizar bien, pero cuando es una decisión, que siempre hay que tomar cuando tienes un componente el contenido del componente quién se encarga el propio componente o se encarga si se encarga del padre pues hay que hay que hacerlo pasar a través de `props` y si se encarga él.
, pues ya sabes que es un `componnete children` que muestra  esto: @2023 Keepcoding.




Vamos a crear un componente `Header`

En principio, para estos componentes. Ya os digo ¿cómo los voy a utilizar solo en un sitio, y todos. Y los voy a pues les voy a dejar que sean ellos los que definan el lugar de pasar pros desde fuera. Y así queda el consumidor queda más limpio también porque cuando yo utilice gire simplemente será poner añadir el tag Header y ya está

```js
import Button from '../Button';


function Header() {
    return (
        <Header>
            <div>
                {/* LOGO */}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </Header>
    );
}

export default Header;
```

genero `src/assets` que meteré todas las imagenes que importe `twitter.svg` ¿como metemos el vectro sgv en la cabecera?

```js
// importamos logo
import logo from '../../assets/twitter.svg';
```

En `App,js` importo el Headeer `import Header from './components/layout/Header';` de estamanera estoy importando el logo. Si haces un console.log(logo) por la consola verás qué te da el logo `/media/twitter.e0cf1fcc791b8372662dcb30b67c2020.svg` Toda esta Url vale desde la cual yo puedo cargar la imagen. Entonces la primera manera que yo tengo para cargar esto en un Tag, pues sería mediante un elemento Img. y pasándole el `src={logo}` `<img src={logo} alt="twiiter-logo"></img>`

```js
import Button from '../Button';
import logo from '../../assets/twitter.svg';

// console.log(logo)

function Header() {
    return (
        <Header>
            <div>
                <img src={logo} alt="twiiter-logo"></img>
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </Header>
    );
}

export default Header;
```

Ahora voy a `app` y le añado la cabecera para ver que aparece `<Header />`


```js
import { useState } from 'react';
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';


import Header from './components/layout/Header';


function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); // definimos funcion que pone el estado en true

  return (
    <div className="App">
      <Header />
      {isLogged ? ( 
        <TweetsPage onLogout={handleLogout} />
        ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      </div>
  );
}

export default App;
```

el file .svg es html

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g>
    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
  </g>
</svg>
```
si transformas y creas una funcion que devolviese todo lo anterior y sería un componente ; eso lo hace por nosotros el cargador de webpac de tal manera que podemos hacer este import tbn `import logo, {ReactComponent as Icon} from '../../assets/twitter.svg';`:

```js
import Button from '../Button';
import logo, {ReactComponent as Icon} from '../../assets/twitter.svg';
```

como lo que cargas es `svg` tiene una ventaja de estilos, tomar el pajaro y por estilos pner el colo que quieras, por ejemplo. entonces puedes pintar el `img` como :

```js
import Button from '../Button';
import logo, {ReactComponent as Icon} from '../../assets/twitter.svg';



function Header() {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </header>
    );
}

export default Header;
```

**componente layout**

```js
import Footer from './Footer';
import Header from './Header';


function Layout({ title }) {
    return (
        <div>
            <Header />
            <main>
                <h2>{title}</h2>
                {content}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;
```

Y ahora le lo quito `<Header />` a App



Si yo quisiera ytulizar este componente Layaou fuera lo utilizaría así `<Layout />` y siempre que puedas utilizar children mucho mejor, entonces decimos que esto es un `Layout` que envuelve los tweets

```js
<Layout title="title">
  <TweetsPage />
</Layout >;
```
por lo tanto la página de tweets la pasamos mejor por children

```js
// import Footer from './Footer';
// import Header from './Header';


function Layout({ title, children }) {
    // return (
    //     <div>
    //         <Header />
    //         <main>
                <h2>{title}</h2>
                {children}
//             </main>
//             <Footer/>
//         </div>
//     );
// }

// export default Layout;
```
cuando comiences hacer un componente no pienses tanto en la implemetación del componente sino en como se va a utilizar el componente por fuera. Cómo se relaciona cone l mundo exterior, logico y transparente y sencillo.

---

Vamos a comenzar a utilizar esto

---

Vamos a `tweetsPages,js` y le decimos que este componente va a ser un `Layout`

```js
    return (
      <Layout title="What´s going on ...">
        <div className={className}>
          <Button onClick={handleLogout}>LogOut</Button>
          <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>
                      <span>{tweet.message}</span>
                    </li>
                    ))
            }
          </ul>
        </div>
      </Layout>
  );
```

y fíjate que le estas diciendo que todo ese componente irá aquí dentro:

```js
// function Layout({ title, children }) {
//     return (
//         <div>
//             <Header />
//             <main>
//                 <h2>{title}</h2>
                {children}
//             </main>
//             <Footer/>
//         </div>
//     );
// }
```

Es decir, siempre que te lleves este componente `Layout` pintarás tu ` <Header />` el `<main>` el `<h2>{title}</h2>` y el `<Footer/>`

**Creamos componente NweTweetPage**

`tweets/NweTweetPage.js`

```js
import Layout from "../../components/layout/Layout";

function NewTweetPage() {
    return <Layout title="What are you thinking?">New TweetsPage</Layout>
}

export default NewTweetPage;
```

Voy a mi componente `app()` y lo pintaré para ver que se repite el Layout. estarás pintando dos cabeceras

```js
  return (
    <div className="App">
      {isLogged ? ( 
        <>
        <TweetsPage onLogout={handleLogout} />
        <NewTweetPage/>
        </>
        ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
```

**importante:** cuando hagas un componente que carga datos asincronamente, intenta pensar en todos sus estados , el estado normal es que muetsre un lista o un scroll inficnito, pero puede que tu app quiera mostrar un estado vacío, y lo peor es dejar un a pantalla en blanco al usuauri

 `PageTweets.js` 
 
 ¿que ocurre si cuando haga la llamada no hay nada aquí `getLatestTweets().then( tweets => setTweets( aquí--->[   ]<---- ))`?

 ```js
  useEffect(() => {
    getLatestTweets().then( tweets => setTweets( [] ))
 ```

Es decir, tenemos que pensar que nuestro componente tweets page cuando va a renderizar normalmente una lista de tweets dentro de un expediente huele, pero qué ocurre si no hay tuits qué sacamos que sacamos hay que controlarlo.Eso vale. No tenemos dejar que esto siga su vida y nos muestre un mueble vacío, pues sin decirle nada al usuario, pues es una es una interfaz diseñada no entonces desde el punto de vista del usuario, podemos hacer algo así:

ahora tenemos esto:

```js
    return (
      <Layout title="What´s going on ...">
        <div className={className}>
          <Button onClick={handleLogout}>LogOut</Button>
          <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
            {tweets.map(tweet => (
              <li key={tweet.id}>
                <span>{tweet.message}</span>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
```

y le decimos , si hay algo saca esto, si no lo otro `{tweets.length ? <ul style={{ listStyle: 'none', borde... </ul> : ALGO MÁS TIENES QUE SACAR}`

```js
    // return (
    //   <Layout title="What´s going on ...">
    //     <div className={className}>
    //       <Button onClick={handleLogout}>LogOut</Button>
          {tweets.length ? <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
                              {tweets.map(tweet => (
                                <li key={tweet.id}>
                                  <span>{tweet.message}</span>
                                </li>
                              ))}
                            </ul> : <Button $variant="primary">Be the firts one...</Button>
          }
    //     </div>
    //   </Layout>
    // );
```

la idea final es que estos dos componente de la `app()` 

```js
 <>
        <TweetsPage onLogout={handleLogout} />
        <NewTweetPage/>
        </>
```

se muestren en funcion de la `URL`


**Trabajando botonces de Login**

En la cabecera tenemos el botón de login. La idea es que me sirva luego como enlace para llevar a la ventana del login, cuando tengamos todas las rutas, y también que haga el switch entre log y el logout, cuando yo esté loqueado, pues vamos a darle esa utilidad. ¿Dónde tenemos nuestro botón de loggin. Lo tenemos en la `Layout` en `<Header></Header>`.

```js
function Header() {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                <Button variant= "primary">Log in</Button>
            </nav>
        </header>
    );
}
```

Para que este componenet sepa si se tiene que pintar en modo login o logut, necesitamos una cosa, saber si el usuario está loguado. Entonces, -> si el usuario esá logueado le pintas el logout `{isLogged ? (<Button>logout</Button>) : (<Button variant= "primary">Log in</Button>)}` pero estoy en Header, ¿como puedo hacer que el suario sepa que está loguado?

El componente `<app></app>` su hijo es `<tweetPage></tweetPage>` el hijo de este es `<Layout></Layout>` y el hijo de este es `<Header></Header>` y este tiene la lógica `{isLogged ? (<Button>logout</Button>) : (<Button variant= "primary">Log in</Button>)}` incluso esta logica la sacaría como otro componente y le diría `OutBUtton` o similar, pero vamos a dojarlo.

Solo hay una menra, que Header pregunte si esta loguado o no `function Header( {isLogged} ) {`,   
pero Header le esta renderizando Layaou, `function Layout({ title, children, isLogged }) {` --> `<Header isLogged={}/>`
```js
function Layout({ title, children, isLogged }) {

  ...


  return (
    <div>
      <Header isLogged={isLogged}/>
```

pero Layaou no sale de ningún sitio, se lo han de decir desde TweetPage 

```js

function TweetsPage({ dark, onLogout, isLogged }) {

  ...

    return (
      <Layout title="What´s going on ..." isLogged={isLogged}>
```

y ahora `app()` si  que puede decirla a `TweetPage` estás loguado `<TweetsPage onLogout={handleLogout} isLogged={isLogged}/>`

```js
  return (
    <div className="App">
      {isLogged ? ( 
        <>
        <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
```

y así una y otra vez ... es decir... **ESTO ES UN PROBLEMA** y lo vamos arreglar otro día.. pero ahora vamos a hacer esto


Pero de verdad crees que `TweetPage` tiene que pasar `isLoged` debde de hacer de structuring isLoged? NO...

---
**nota** : quitamos el drak, y la  

 //   const className = clsx('tweetsPage', { dark, light: !dark });  
  const className = clsx(styles.tweetsPage, {  
    [styles.dark]: dark,  
    [styles.light]: !dark,  
  });  

---

...seguimos

El `ìsLogged`que introduces en la funcion como pa´rametro `function TweetsPage({onLogout, isLogged }) {` solo lo pasa a asu hijo como `<Layout title="What´s going on ..." isLogged={isLogged}>`. Entonces de todas las cosas que se pasan a `TweetPage` cuáles usa `TwetsPage` realmente, sólo `onLogout` las otras solo para dejarlo pasar. Entonces lo que se hace en estas ocasiones es :

`function TweetsPage({onLogout, ...rest }) {` pásame lo que usaré yo y lo demás me lo metes en un objeto `...rest` me da igual cuantas, me las metes ahí
`<Layout title="What´s going on ..." {rest}>` de esta manera todo lo que no sea onLogout TweetPage lo va a dejar pasar, hacemos un pasthrough
 
```js

import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { logout } from '../auth/service';
import Layout from '../../components/layout/Layout';



function TweetsPage({onLogout, ...rest }) {
  // inicializa array de tweets vacío con la funcion
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then( tweets => setTweets( tweets )).catch(error => {
      // Añade aquí el manejo de errores
      console.error("Error fetching tweets:", error);

      return function () {
        console.log('Exit');
      };
    });

  }, []); // El array de dependencias vacío indica que el efecto solo se ejecuta en el montaje
  
  
  const handleLogout = async () => {
    await logout();
    onLogout();
  }
  
    return (
      <Layout title="What´s going on ..." isLogged={isLogged}>
        <div className="TweetPage">
          <Button onClick={handleLogout}>LogOut</Button>
          {tweets.length ? <ul style={{ listStyle: 'none', borderColor: 'red', padding: 24}}>
                              {tweets.map(tweet => (
                                <li key={tweet.id}>
                                  <span>{tweet.message}</span>
                                </li>
                              ))}
                            </ul> : <Button $variant="primary">Be the firts one...</Button>
          }
        </div>
      </Layout>
    );
}

// lo exporto
export default TweetsPage;

```

Layaou lo mismo y se lo pasa al siguiente

```js
function Layout({ title, children, ...rest }) {
  return (
    <div>
      <Header {...rest}/>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
```

entonces el objeto `...rest` cusualmente ahora hay `isLoged` que llega a l Header, que es quien realmente lo necesita en su funcion

```js
function Header( {isLogged} ) {
    return (
        <header>
            <div>
                <Icon width={32} height={32} fill='red'/>
                {/*<img src={logo} alt="twitter-react" />{' '}*/}
            </div>
            <nav>
                {isLogged ? (<Button>logout</Button>) : 
                            (<Button variant= "primary">Log in</Button>)
                }
            </nav>
        </header>
    );
}
```

Y ahora en el button tendremos que ponerle la lógica del click y el metodo de esa logica que antes estaba en `tweetsPage` y le quieto el `<Button onClick={handleLogout}>LogOut</Button>`
```js
const handleLogout = async () => {
  await logout();
  onLogout();
}
```

y el `onLogout()` lo has de recibir por props que viene desde app y `function Header( {isLogged, onLogout} ) {`

y ahora en `TweetsPage` las propiedades que recibe todas, se las pasa al siguiente, entonces a esas propiedades son las `props`. "Props" es una abreviatura de "propiedades". En esencia, son datos que se pasan de un componente padre a un componente hijo en una aplicación.


```js
function TweetsPage(props) {

  ...


return (
<Layout title="What´s going on ..." {...props}>
```


### Context

Vamos hacer un tunel directo entre estados.


**1. creamos un contexto**

Para tenerlo al lado de los componentes de `auth` me creo un contexto. `auth/context.js`

```js
import { createContext } from "react";

export const AuthContext = createContext(false);
```

me voy a `app`. ¿quien quiere tener acceso a saber soi esty legueado o no? pues `<TweetsPage>` porque de el depende que le diga ... , seguramente `<LoginPage></LoginPage>` al final hemos de pensar donde ponemos ese `provider` proque o que queda fuera de ese `provider` no tiene acceso a ese contexto. 

Pero en nuestro caso como en princpio esto tiene que valer para toda la aplicación lo podemos poner al principio importanto el `AuthContext.Provider`

```js
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true); // definimos funcion que pone el estado en true
  const handleLogout = () => setIsLogged(false); 

  return (
    <AuthContext.Provider>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage onLogin={handleLogin} />
            )}
      </div>
    </AuthContext.Provider>
  );
}
```

**2. proveer el contexto**

Quiero poner un valor en este `Provider` vavue, pero incluso puedo poner funciones. Entonces puedo crearme un objeto que tenga las tres cosas, por un lado estos dos metodos : `const handleLogin = () => setIsLogged(true);` , `const handleLogout = () => setIsLogged(false);` 
creo el metodo

```js
const authValue = {
  isLogged,
  onLogout: handleLogout,
  onLogin: handleLogin
}
```

Luego ya tengo todo puesto en contexto: esto es un estado `const [isLogged, setIsLogged] = useState(initiallyLogged);` junto un par de funciones,  `const handleLogin = () => setIsLogged(true);` , `const handleLogout = () => setIsLogged(false);` yo me he creado un objeto `const authValue`  y este objeto lo pongo en elcontexto:

```js
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
```

**3. Consumimos el contexto**

es decir, cualquier componente que utilice `AuthContext` y le pase este el contexto siempre y vuando esté dentro de este `Provider`:
es decir, siempre que un consumidor consuma `authContext` pasandole este context `Provider` tendrá acceso al objeto que está en el interior del metodo `authValue`

```js
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage onLogin={handleLogin} />
            )}
      </div>
    </AuthContext.Provider>
```

Si yo vou a `function Header( {isLogged, onLogout} ) {` y en vez de preocuparte de recivor los parámetos por `{isLogged, onLogout}` le puedo pasar los valores por contexto y los puedo sacar de la entrada de la función:

```js
function Header() {
    const { isLogged, onLogout } = useContext(AuthContext)
    ...

```

Ahora pasamos hacer limpieza y en layout podemos quitar el `...rest`

```js
function Layout({ title, children, ...rest }) {
  return (
    <div>
      <Header {...rest}/>
      <main>
```

```js
function Layout({ title, children}) {
  return (
    <div>
      <Header/>
      <main>
```

```js
function TweetsPage(props) {
    ...
    return (
      <Layout title="What´s going on ..." {...props}>
```

```js
function TweetsPage() {
    ...
    return (
      <Layout title="What´s going on ...">
```

```js
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged}/>
```

```js
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage/>
```

Lo mismo con `LoginPage()` , olvídate de pasar datos si los tienes en el contexto

```js
function LoginPage( {onLogin} ) {
```

```js
function LoginPage() {
    const {onLogin} = useContext(AuthContext)
```

y si el dia de mañana tienes que mover login no tienes que preocuparte de si su padre le sigue pasando las props o no, porque yo estoy conectado al contexto ymientras haya contexto yo lo recibo.

Tdos estos `isLogin` vienen ahora del mismo sitio, vienen de`app` de aqui `  const [isLogged, setIsLogged] = useState(initiallyLogged);` y los hemos empaquetado para pasárselos al ` <AuthContext.Provider value={authValue}>`
```js
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  ...

   <AuthContext.Provider value={authValue}>
```


### Refactoring


En `LoginPage.js` Para sacar el datos del contexto  `const {onLogin} = useContext(AuthContext);` tengo que importar `import { useState, useContext } from 'react';`, `import { AuthContext } from './context';`

Cuando nos pase esto podemos crearnos un `custom Hok` que es una funciona que utiliza dentro o tra funciona para usarla en componentes:

vamos a `context.js` y creo la funcion userAuth 

```js
import { createContext, useContext } from "react";


export const AuthContext = createContext(false);

export const userAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}
```

y en LoginPage.js hago esto que es lo mismo pero me quito importar cosasy saber donde está mi contexto, y desacoplas de donde sacas la infromacion y lo que se cuenta por dentrás te da igual

```js
const {onLogin} = useContext(AuthContext);
```

```js
function LoginPage() {
    const {onLogin} = userAuth();
```

y en el `Header.js` lo mismo

```js
function Header() {
    const { isLogged, onLogout } = useContext(AuthContext)
```

```js
function Header() {
    const { isLogged, onLogout } = useContext(AuthContext)
```

Vamos ahora a la `App` tienes todo eso para manejar el estado:

```js
  // esto
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  // esto
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false); 

  // esto
  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin}

  // esto
  return (
    <AuthContext.Provider value={authValue}>
```

es como una cosa muy concreta que podríamos sacar fuera y dejarlo en un componenet que tenga la responsabilidad de manejar el estado y poner en contexto y ya está.

Creamos en el mismo file de `contex.js` y creamos el componente `AuthContextProvider()` y quiero saber donde pongo el provider y el custom Hook

Me cogido de `app` todo esto esto , he movido cosas simplemente
```js
export const AuthContextProvider = () => {
    const [isLogged, setIsLogged] = useState(initiallyLogged);

    const handleLogin = () => setIsLogged(true); 
    const handleLogout = () => setIsLogged(false); 

    const authValue = {
        isLogged,
        onLogout: handleLogout,
        onLogin: handleLogin
    }

    return (
        <AuthContext.Provider value={authValue}> </AuthContext.Provider>
    );
}
```

Y ahora puedo combiar cosas en `App` que está así

```js
function App({ initiallyLogged }) {
  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage onLogin={handleLogin} />
            )}
      </div>
    </AuthContext.Provider>
  );
}
```

y lo combiamos por 

```js
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import NewTweetPage from './pages/tweets/NewTweetPage';
import { AuthContextProvider } from './pages/auth/context';
import { useAuth } from './pages/auth/context';


function App({ initiallyLogged }) {
  const { isLogged } = useAuth();
  return (
    <AuthContextProvider initiallyLogged={initiallyLogged}>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage />
            )}
      </div>
    </AuthContextProvider>
  );
}

export default App;
```

Y ¿como se llama la propieda que hay dentro de `<AuthContextProvider> </AuthContextProvider>`? CHILDREN, por l otanto tendras que pasarle children al **context** `export const AuthContextProvider = ( {initiallyLogged, children} ) => {`

es comun que cuando crees custom Hooks para contexto, todos van a necesitar pasar children 

```js
export const AuthContextProvider = ( {initiallyLogged, children} ) => {
    const [isLogged, setIsLogged] = useState(initiallyLogged);

    const handleLogin = () => setIsLogged(true); 
    const handleLogout = () => setIsLogged(false); 

    const authValue = {
        isLogged,
        onLogout: handleLogout,
        onLogin: handleLogin
    }

    return (
        <AuthContext.Provider value={authValue}> {children} </AuthContext.Provider>
    );
}
```


voy a `index.js` le paso `<AuthContextProvider initiallyLogged={!!accesToken}>` le quito a `App` esto que ya no necesita `{!!accesToken}`


```js
root.render(
  <React.StrictMode>
   <AuthContextProvider initiallyLogged={!!accesToken}>
     <App />,
   </AuthContextProvider>
  </React.StrictMode>,
);
```


```js
function App() {
  const { isLogged } = useAuth();
  return (
    <AuthContextProvider>
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage />
            )}
      </div>
    </AuthContextProvider>
  );
}
```

Es decir, tenemos toda nuestra aplicacion envuelta con Provider

```js
root.render(
  <React.StrictMode>
   <AuthContextProvider initiallyLogged={!!accesToken}>
     <App />,
   </AuthContextProvider>
  </React.StrictMode>,
);
```

te da fallo en el login porque tienes que quitar `<AuthContextProvider>` al app

```js
  return (
      <div className="App">
        {isLogged ? ( 
          <>
          <TweetsPage />
          <NewTweetPage/>
          </>
          ) : (
            <LoginPage />
            )}
      </div>
  );
```

esto es porque en el indes ya está `<AuthContextProvider>` y lo lee dos veces


### Descargo cambios de repo remoto
----

SE HAN HECHO CAMBIOS DESDE EL REPOSITORIO Y VOY A INTRODUCIR ESTOA CAMBIO VÍA GIRHUB:

https://github.com/KeepCodingWeb15/twitter-react/commit/a9f1b07ade3e63703cb69bf840988630b04615d3

```sh
git clone https://github.com/KeepCodingWeb15/twitter-react/tree/main
cd twitter-react
git checkout a9f1b07                 # hash-del-commit cuando se hicienreon cambios
npm install                          # Instala las dependencias del repo descargado
npm start                            # Inicia la aplicación React
```

----



### enrutados en el cliente

History API https://developer.mozilla.org/en-US/docs/Web/API/History_API

La History API proporciona una interfaz para manipular el historial de sesiones del navegador (la historia del navegador que el usuario ha navegado en la pestaña actual). Es parte del estándar HTML5 y proporciona funciones sencillas para interactuar con la pila de historial del navegador. Puedes utilizar esta API para modificar el historial del navegador sin necesidad de recargar la página.

Aquí hay algunas cosas que puedes hacer con la History API:

* Manipular el historial del navegador: Puedes añadir, modificar y eliminar entradas del historial.
* Navegar por el historial: Puedes moverte hacia adelante y hacia atrás a través del historial del navegador, de manera similar a los botones "Atrás" y "Adelante" del navegador.
* Guardar estados en el historial: Puedes asociar un estado específico del JavaScript con una entrada del historial. Por ejemplo, si estás construyendo una aplicación de página única (SPA), puedes guardar el estado de la página para que el usuario pueda volver a ella usando el botón "Atrás" del navegador.

Funciones principales de la History API:

* history.pushState(): Añade una entrada al historial del navegador sin cambiar la página que el usuario está viendo. Esto es útil para cambiar la URL visible sin recargar la página, como en una aplicación de página única (SPA).
* history.replaceState(): Similar a pushState, pero modifica la entrada actual del historial en lugar de crear una nueva. Esto es útil cuando quieres actualizar la URL o el estado de la historia debido a una acción del usuario, pero no quieres que esa acción cree una nueva entrada en el historial.
* history.back(): Funciona como el botón "Atrás" del navegador, llevando al usuario a la página anterior en el historial.
* history.forward(): Funciona como el botón "Adelante" del navegador, llevando al usuario a la página siguiente en el historial.
* history.go(): Permite navegar a una página específica dentro del historial del navegador, donde se puede pasar un número entero como argumento para moverse esa cantidad de pasos a través del historial (por ejemplo, -1 es igual a history.back() y 1 es igual a history.forward()).

La History API es fundamental en las aplicaciones de página única, ya que permite actualizar la URL visible para el usuario sin recargar la página completa, lo cual es crucial para la experiencia del usuario y el rendimiento de la aplicación. Además, facilita la gestión de estados en aplicaciones web complejas, manteniendo consistente la funcionalidad de navegación del navegador.


**React Router** Client side routing

Objetivo: sincroniza la url del browser sincronizada con mi lista. No salimos del servidor.

React Router es una biblioteca de enrutamiento estándar para React, una biblioteca de JavaScript para construir interfaces de usuario. React Router permite la navegación entre distintas componentes en una aplicación React, manejando la sincronización entre la URL en la barra de direcciones del navegador y la vista que se muestra al usuario. Esto es particularmente importante en aplicaciones de una sola página (SPA, por sus siglas en inglés), donde la navegación tradicional de recargar la página no es deseada.

React Router utiliza la History API bajo el capó para mantener la interfaz de usuario y la URL sincronizadas. Aquí hay algunas cosas que React Router facilita:

1. Navegación Declarativa: Puedes definir rutas utilizando componentes de React, lo que permite una forma declarativa de mapear rutas a tus componentes.
2. Navegación Dinámica: Con React Router, puedes manejar rutas dinámicas y parámetros de URL, lo que es útil para páginas de detalles de productos, perfiles de usuario y otras páginas dinámicas.
3. Navegación Anidada: Permite definir rutas dentro de rutas, lo que es útil para crear aplicaciones con muchas capas de navegación.
4. Componentes de Navegación: React Router proporciona componentes como `<Link>`, `<NavLink>`, `<Outlet>` y `<Routes>`, que facilitan la creación de enlaces de navegación y la representación de componentes basados en la URL actual.
5. Gestión del Historial: Aunque puedes interactuar directamente con la History API, React Router maneja esto por ti y proporciona herramientas para trabajar con el historial del navegador de una manera que se integra bien con las aplicaciones React.
6. Transiciones de Rutas: Puedes fácilmente configurar animaciones y comportamientos cuando el usuario navega entre rutas.
7. Rutas Protegidas: React Router facilita la creación de rutas que requieren autenticación, permitiéndote proteger ciertas partes de tu aplicación.

En resumen, React Router ofrece una capa de abstracción por encima de la History API para trabajar con el sistema de enrutamiento en una aplicación React. Permite desarrollar aplicaciones complejas de una sola página con enrutamiento que imita la navegación tradicional de la web, sin perder las ventajas de tener una SPA.

```sh
npm install react-router-dom
```

La manera más basica de utilizar, es ir al index y dentro del index hacerun import `import { BrowserRouter } from 'react-router-dom';` y en volver toda la aplicacion con `</BrowserRouter>` así lo creamos y lo ponemos en contexto, 

```js
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider initiallyLogged={!!accessToken}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
```

así le permites utilizarlo. Esto es lo mismo que pone en la diapositiva / slide

```js
const router = createBrowserRouter(

)
...

<RouterProvider router={router} /> 
```
en vez de pasar el objeto `router` nosotros haremos la manera facil de importat en `index` y envolver la palicacion `</BrowserRouter>`. En algún monento necesitaremos el objeto para utilizarlo por mi mismo pero ya lo haremos.

Todo lo que quede dentro de aquí `</BrowserRouter>` puedo utilizar todo. Luego necesitaremos crear rutas dentro de `app`. Tenemos para crea rutas varios componentes `Routes` es para decir que harás una agregacion de rutas

`App()` 

Nuestro componente Router sirve para inticar `aquí dentro quiero meter rutas` para hacer una agregacion de rutas. Queremos meter rutas a todo esto

```js
  return isLogged ? ( 
          <Layout>
            <TweetsPage />
             {/* <NewTweetPage/> */}
              </>
          <Layout/>
              ) : (
          <LoginPage />
            )}
        );
```

Vamos is asociando rutas por cada una de laspñaginas y lo definimos todo dentro de un `<Routes/>` 

Los componentes `<Route></Route>` han de ser siempre como hijos directos de `<Routes>`

```js
    <Routes>
      <Route path="/login" element={<LoginPage />} />
```

Les estoy diciendo que, quiero que la ruta `/login` esté asociada con el componente `<LoginPage></LoginPage>` que es `import LoginPage from './pages/auth/LoginPage';` para asociar una ruta le pasas ptah `path="/login"` y el elemento `<LoginPage />`

En este momento si vas a `localhost:3000/Login` pintará la pag; pero si vas a **`localhost:3000/tweets`** no hará nada porque no está resolviendo.

Definimos una **ruta dinámica**: `<Route path="/tweets/:tweetId"` con los **:** le decimos que el id será dinámico. Y luego dentro de elemento vas a tener acceso y te servirá para que el componete pida el tweet correspondiente `element={<Layout ><div>Hola Tweet</div><Layout />`

**Redirecciones**: `<Route path="/" element={<Navigate to="/tweets" />} />` la ruta **path/** no es neesarrio meterle un `element` simplemente envíale a `/tweets` 


```js
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      // Asocia la ruta `/login` con el componente `LoginPage`. 
      // Al visitar `/login`, se mostrará `LoginPage`.

      <Route path="/tweets" element={<Layout />}>
        // Define una ruta base `/tweets` que utiliza `Layout` como su componente.
        // `Layout` puede incluir elementos comunes como cabecera, pie de página, etc.

        <Route index element={<TweetsPage />} />
        // Ruta por defecto para `/tweets`. Al visitar `/tweets`, se muestra `TweetsPage`.
        // Es como un "subruta" dentro de `/tweets`.

        <Route path=":tweetId" element={<TweetPage />} />
        // Ruta dinámica bajo `/tweets`. Captura cualquier valor como `tweetId` y 
        // muestra `TweetPage`, ideal para mostrar detalles de un tweet específico.

        <Route path="new" element={
            <RequireAuth>
              <NewTweetPage />
            </RequireAuth>
          }
        />
        // Ruta `/tweets/new` protegida por `RequireAuth`. Solo usuarios autenticados 
        // pueden acceder a `NewTweetPage`. Si no están autenticados, `RequireAuth` 
        // debería redirigirlos o mostrar un mensaje.
      
      </Route>

      <Route path="/" element={<Navigate to="/tweets" />} />
      // Redirección de la ruta raíz `/` a `/tweets`. Al visitar `/`, el usuario 
      // es automáticamente redirigido a `/tweets`.

      <Route path="/404" element={<div>404 | Not found</div>} />
      // Ruta `/404` muestra un simple mensaje de error 404 - No encontrado.
      // esta ruta podrás redirigir al usuario en cualquier momento aquí

      <Route path="*" element={<Navigate to="/404" />} />
      // Cualquier otra ruta no definida anteriormente redirige a `/404`. 
      // Es una especie de captura-todo para rutas no encontradas.

    </Routes>
  );
}
```


me cro una nueva carpeta para `tweets/TweetPage/`  y dentro `index.js` y `tweetsPage.js` 

└── tweets  
*    ├── NewTweetPage  
*    │   ├── NewTweetPage.css  
*    │   ├── NewTweetPage.js  
*    │   └── index.js  
*    ├── TweetPage  
*    │   ├── TweetPage.js  
*    │   └── index.js  
*    ├── TweetsPage  
*    │   ├── TweetsPage.css  
*    │   ├── TweetsPage.js  
*    │   ├── TweetsPage.module.css  
*    │   └── index.js  
*    ├── components  
*    │   ├── LikeButton.css  
*    │   ├── LikeButton.js  
*    │   ├── Tweet.css  
*    │   └── Tweet.js  
*    └── service.js  


Creo componente `<TweetPage/>` en `TweetPaje.js`

```js
import Content from '../../../components/layout/Content';

function TweetPage() {

  return (
    <Content title="Tweet detail">
      <div>
        Tweet detail oes here...
      </div>
    </Content>
  );
}

export default TweetPage;
```

`index.js`

```js 
export { default } from './TweetPage';
```

Ahora hemos definido las rutas para una primera version de `localhost:300/tweets`


#### commit : Nested routes

* 5eaca71d8d48113489c9889068c18dfa698af5f6

**Rutas anidadas**

Esta estructura jerárquica permite una mejor organización del enrutamiento, especialmente en aplicaciones más grandes y complejas. Cada ruta padre puede tener su propio componente y, a su vez, puede incluir rutas hijas que representan diferentes secciones o páginas dentro de ese componente padre.

Cada nivel del árbol representa una ruta en la aplicación, y las rutas hijas representan diferentes secciones o páginas dentro de la ruta padre. Esto permite una navegación clara y estructurada en la aplicación. La estructura del árbol de rutas se vería así:

* / (raíz)
* * Redirige a /tweets
* /login
* * Muestra LoginPage
* /tweets (utiliza Layout)
* * / (index)
* * * Muestra TweetsPage
* * /:tweetId
* * * Muestra TweetPage (detalles de un tweet específico)
* /new
* * Requiere autenticación (RequireAuth)
* * Muestra NewTweetPage (crear nuevo tweet)
* /404
* * Muestra un mensaje de error 404
* `*`(cualquier otra ruta)
* * Redirige a /404

----

Ahora vamos hacer que el pajarito de la cabecera sea un enlace a home. Vamos a `srd/components/layout/header.js`

```js
import { Link, NavLink } from 'react-router-dom';
```

envuelvo el nodo que quiera enlazar; `to="/"` me enlaza a donde yo quiera que vaya, en este caso me lleva a /home

```js
      <Link to="/">
        <div className="header-logo">
          <Icon width={32} height={32} fill="red" />
          {/* <img src={logo} alt="twitter-react" /> */}
        </div>
      </Link>
```

podrías linkar lo que quieras, className es asignacion de estyles className="header-button" 

```js
<nav className="header-nv">
  <Link to="/tweets/new">New Tweet</Link>
  // Crea un enlace que lleva al usuario a la ruta '/tweets/new' para publicar un nuevo tweet.

  <Link to="/tweets/new">New Tweet</Link>
  // Este es un enlace duplicado al anterior, probablemente debería llevar a una ruta diferente.

  <AuthButton className="header-button" />
  // Inserta un botón de autenticación, posiblemente para iniciar sesión o cerrar sesión, 
  // dependiendo del estado de autenticación del usuario.
</nav>
```

Linkar dinamicamente

```js
<Link to={`/tweets/${id}`}>
  <Tweet {...t weet} />
</Link>
```


Vamos a `TweetsPage.js` para el componente `<TweetsPage />`

```js
  return (
    <Content title="What's going on...">
      <div className="tweetsPage"> // Contenedor con una clase CSS `tweetsPage`.

        {tweets.length ? ( // Si array `tweets` no está vacío), se ejecuta el siguiente bloque.
          <ul>
            // Lista no ordenada para mostrar los tweets.

            {tweets.map(({ id, ...tweet }) => (
              // Mapeo de cada tweet en el array `tweets`. `id` y el resto de propiedades del tweet se extraen.

              <li key={id}>
                // Elemento de lista para cada tweet. `key={id}` es importante para la eficiencia en el renderizado.

                <Link to={`${id}`}>
                  // Enlace a la ruta del tweet individual. `to={`${id}`}` lleva a la ruta del tweet específico.

                  <Tweet {...tweet} />
                  // Componente `Tweet` para mostrar el contenido del tweet. 
                  // Se pasan todas las propiedades del tweet como props.
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
          // Si no hay tweets, se muestra el componente `EmptyList`.
        )}
      </div>
    </Content>
  );
}
```


**NavLink**

marchea la ruta que tengas en ese momento, y si el `to=` de ese navLink coincide con la ruta que hay en la `url` le pasa una clase a este `nav` y tu con el estilado puedes hacer un style para ese elemento . La tipica barra de navegacion, donde hay listado de enlaces , lo que hacen las aplicaciones es, la ruta que se ha seleccionado... te la pones con un estilo diferente. Remarca cual de tus enlaces de navegacion te indica que ese enlace corresponde a ese estilo. Por ejemplo si estoy en la página "New Tweet" ese texto del boton que pertenece a esa páginba estará en azul.

es decir aplica el `.active` en el estile .css . Cuando le pasas el `end` al final le estas diciendo que se active cuando la ruta coincida con toda la ruta `<NavLink to="/tweets" className={navItemClassName} end>` marcas con un determinado estile el enlace a la ruta que tengas en ese momenot. Al que haga `match`

cuando le pasas un className de tipo funcion `className={navItemClassName}` está recibiendo `clasName={ isActive }) => (isActive ? { color: 'red' } : null` si está activo le plicas si no no.

Fíjate que en `Header.css` tiene `.header-nav .active {color: rgba(29, 161, 242, 1);}` entonces se cambia al azul si hay un eelmento activo

En `Header.js`
```js
      <nav className="header-nav">

        <NavLink to="/tweets/new" replace className={navItemClassName}
          // style={({ isActive }) => (isActive ? { color: 'red' } : null)}
        >New Tweet</NavLink>

        <NavLink to="/tweets" className={navItemClassName} end>See latest tweets</NavLink>

        <AuthButton className="header-button" />
      </nav>
```

Ahora nos vamos al `login` que nos tendría que llevar a loguearnos. Lo que sucede es que ahora mi boton de logout es un boton no es un Link y quiero que siga teniendo pinta de boton. Hay un truco en styleComponents que permite definir un componente con un determinado css pero que permite renderizar cualquier otro componente en lugar de un button renderiza un Link  `<Button as={Link}` le dices que es un button pero por debajo un link y así le puedes pasar un `to="/login" ` para enviarlo al path requerido 

https://styled-components.com/docs/api#as-polymorphic-prop

```js
return isLogged ? (
  <Button onClick={handleLogoutClick} className={className}>
    Logout
  </Button>
) : (
  <Button as={Link} to="/login" $variant="primary" className={className}>
    Login
  </Button>
);
```

**replace**

todos los link tiene una propiedad `replace` que hace es pasar la propiedad `replace` a tru y si la quitas pasa a false. ¿que hace?

estoy aqui http://localhost:3000/tweets luego a http://localhost:3000/login y cada navegacion me guarda en el hisorico, Lo que hace replace es que si vuelces a http://localhost:3000/tweets el replace te envía a donde quieres pero sin introducir una nueva entrada en "history" de la memoria de navegacion de la web. No va acumulando entradas iguales, 

Este comportamiento es útil en varios casos de uso, como evitar entradas duplicadas en el historial o cuando una página es solo un paso intermedio en un proceso (como una página de redirección después de iniciar sesión) y no quieres que el usuario pueda volver a ella mediante el botón de retroceso del navegador.


**Hooks**

nos da un extra para tener una experiencia de navegacion del usuario buena

* Gestión del Estado: El hook useState permite a los componentes funcionales tener su propio estado local, algo que antes solo era posible en componentes de clase.
* Efectos Secundarios en Componentes Funcionales: El hook useEffect es utilizado para manejar efectos secundarios (como solicitudes de datos, suscripciones, o cambios manuales en el DOM) en componentes funcionales.
* Contexto: useContext permite a los componentes funcionales acceder al contexto de React, una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
* Referencias a Elementos del DOM: useRef es usado para obtener una referencia directa a un elemento del DOM o a una instancia de un componente.
* Personalización y Reutilización de Lógica: Los hooks personalizados (custom hooks) permiten extraer componentes lógicos para reutilizarlos en otros componentes, mejorando la modularidad y reusabilidad del código.


PROTEGIENDO COMPONENTES

Si el usuario sabemos que está logueado queremos evitar que llega `tweets/new` , entonces vamos a proteger esa ruta y que redirija al `login`. Cuando el usuario termine el login nos lleva a la ruta.

Creas un componente àra proteges una ruta. `auth/componentes/RequiereAuth.js` de tal manera que todo lo que envualve con ese componente estará protegido. 

```js
<Route path="new" element={
    <RequireAuth>
      <NewTweetPage />
    </RequireAuth>
  }
```

como servirá para envolver otro elemento, le decimos que tiene children `function RequireAuth({ children }) {`

```js
import { Navigate, useLocation } from 'react-router'; // navegación y acceso al estado de la ruta actual.
import { useAuth } from '../context'; // Importa el hook `useAuth` 

function RequireAuth({ children }) {
  // estos `children` son los componentes que se renderizarán si el usuario está autenticado.

  const location = useLocation(); // Utiliza `useLocation` para acceder a la información sobre la ruta actual.
  const { isLogged } = useAuth(); // Utiliza `useAuth` para obtener el estado de autenticación del usuario.

  return isLogged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
  // Si `isLogged` es verdadero, renderiza `children` (componentes protegidos).
  // Si `isLogged` es falso, redirige al usuario a `/login`, 
  // pasando la ubicación actual en el estado para un posible redireccionamiento posterior al inicio de sesión.

}

export default RequireAuth;
```

`state` permite pasar un objeto de estado a la ruta de destino. En este caso, se está pasando un objeto a la ruta /login. `state={{ from: location }}` está pasando el objeto de ubicación actual a la ruta /login como estado. 

¿donde se hace esto? en el `loginPage.js` estamos haciendo la comprovacion del logim y cuando hacemos el login cambiamos el estado con `await login(credentials);` y una vez se ha hecho el login cambiamos el estado `onLogin();`

```js
function LoginPage() {
  ...
  const handleSubmit = async event => {
    event.preventDefault();

      await login(credentials);

      onLogin();
  };
  ...
```

yo en el `LoginPage()` puedo utilizar el mismo `const location = useLocation();` este objeto tendrá acceso al `state={{ from: location }}` es decir, yo voy a poder acceder a través de `location.state.from` a toda la ruta que yo guardo, lo que hacemos es almacenar dentro del location en un objeto from la location y yo la puedo obtener aquí : 

```js
function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({username: '',password: '',});

  const location = useLocation();  // la puedo obtener aquí
  ...
```

por lo tanto despues de cambiar el estado yo puedo obtener a donde quiero ir `to = location?.state?.from?`


```js
function LoginPage() {
  ...

  const handleSubmit = async event => {
    event.preventDefault();

      await login(credentials);
      onLogin();

      // ? es si tengo
      const to = location?.state?.from? || '/';
  };
  ...
```

Para hacer la navegación yo tengo un Hook que me permite hacer una función Navegate. Y con esa funcion `const navigate = useNavigate();` le puedo decir que se vaya a `to`

```js
function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({username: '',password: '',});

  const location = useLocation(); 
  const navigate = useNavigate();
  ...
```

```js
function LoginPage() {
  ...
  const handleSubmit = async event => {
    event.preventDefault();

      await login(credentials);
      onLogin();

      const to = location?.state?.from?.pathname || '/'; // ? es si tengo
      navigate(to); // le pueod pasar la url o el location .pathname
  };
  ...
```

ahora si estás aqui `http://localhost:3000/tweets/new` y te deslogueas en la app te envía a `http://localhost:3000/login` cuando haces login de nuevo te vuelve a enviar a `http://localhost:3000/tweets/new` porque estabas allí antes y es lo que le has pasado aquí`<Navigate to="/login" state={{ from: location }} />` en el `state` de  `RequireAuth`; entonces esta `state` lo recupera en el `loginPage()`  con el `to` el state de navegacion hace que te redirija directamente aquí. 

Sin embargo si estas en `http://localhost:3000/login` y haces enter y te logueas cuando has hecho login te vas a la `home` que es `http://localhost:3000/tweets` porque en este segundo caso no tenías `state` en `location?.state?.from?. pathname` es decir has reiniciado la aplicación , no has pasado por `RequiereAuth` no tienes state y te envía a `|| '/';`

Ahora puede decirle una vez estás aquí parado `http://localhost:3000/tweets/new` después de hacer logoin, cuando redirijas hacia atrás con la flecha del navegador, que no te vuelve a llevar a la pagina del login porque ya has hecho loguin. Esto se hace con `navigate(to, { replace: true });` y esto es la mimo que si yo coloco un link con un replace a true, que sustituye la ultima entrada del historico.

 `loginPage()`

```js
navigate(to, { replace: true });
```

y a la vez en `RequireAuth` le colocas el `replace`

```js
<Navigate to="/login" replace state={{ from: location }} />
```

esto sería el flujo completo. Si estás logueado te permite ir a la página de crear un Tweet y si no estás logueado te reenvío a la página de login. Todo a través del objeto state.

**el id del tweet**

cuanod estás en el listado de tweets puedes hacer click en alguno y capturas `http://localhost:3000/tweets/8` el numero de tweets ¿como lo capturas? `TweetPage.js` y allí puedes usar `const params = useParams();`

```js
function TweetPage() {
  const params = useParams();


  return (
    <Content title="Tweet detail">
      <div>
        Tweet detail {params.tweetId} goes here...
      </div>
    </Content>
  );
}

export default TweetPage;
```

Al hacer esto estás dibujando el numero de detalle del tweet que corresponda " Tweet detail 8 goes here..." . Así puede llamar al api y pintar el detalle del tweet.

el `tweetId` sale del nombre que le has pusto enla parte dinámica de la app()

```js
function App() {
  return (
    <Routes>
        ...
        <Route path=":tweetId" element={<TweetPage />} />
```

**Errores**

* ¿qué pasa si un usuario teclea un id de un twet que no existe http://localhost:3000/tweets/85454545454 cuando llamas al api? pues le haces un 404
* alguien intenta hacer un token desde inpect de local storage
* ...

vamos ahcer control de estados y errores porque esto es lo que distingue una pap robusta de una pobre

---
Cuadno un usuario se loguea mal o directamente no estáconectado aparecen errores. estos errores deben ser controlados en el `service,js`

```js
export const login = credentials => {
  return client.post('/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    storage.set('auth', accessToken);
  });
};
```

pero como tenemos ahí nuestro cliente de axios `return client.post(` podemos ir allí y axios nos da para poder controlar estos errores no esperados y los esperados.

Ya tenía un interceptor para que si la llamada iba bienl le devolvera el dato

```js
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(response => response.data,}
);
```

Ahora vamos a pasarle una seguinda funcion que cuadno haya error se ejecuta, cuando la api nos develve una respuesta entre 400 y 500, o si tienes un error del browser. 

```js
client.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      console.log(error.response);
      // 400/500 server error si te quedas sin red
      return Promise.reject({
        message: error.response.statusText,
        ...error.response,
        ...error.response.data,
      });
    }
    // Request error
    return Promise.reject({ message: error.message });
  },
);
```

Vamos a `loginPage.js` ¿donde se puede producir el error? en la llamada al servicio


```js
function LoginPage() {
  ...
  const handleSubmit = async event => {
    event.preventDefault();

    await login(credentials);
    ...
```

lo que haremos será hacer un `try/cath` . Si hay un error podríamos mostrar al ususario la típica pastillita de texto con el error. ¿como se reacciona a un error? Pues lo de siemrpe, nos creamos un **estado** para guaradar el posible error `const [error, setError] = useState(null);` de iniciio lo ponemos a null y si hay un error lo almaceno en `error`.

Cuando ahgas el `catch` capturas el error lo almacenas `setError(error);` cuando lo captures el componente renderizará de nuevo y de alguna manera tendrás que decirle abajo en `return{}` que te pinte el error pintame un div con el error.message ` <div className="loginPage-error" onClick={resetError}>` . Es decir que si se produce un error lo capturas, haces un set y como el componete renderiza de nuevo y luego debería pintar un pastillata con el mensaje de rror

```js
function LoginPage() {
  // const { onLogin } = useAuth();
  // const [credentials, setCredentials] = useState({username: '',password: '',});

  const [error, setError] = useState(null); //  creamos un **estado**

  // const [isFetching, setIsFeching] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     setIsFeching(true);
  //     await login(credentials);
  //     setIsFeching(false);
  //     onLogin();
  //     const to = location?.state?.from?.pathname || '/';
  //     navigate(to);
    } catch (error) {
      setIsFeching(false);
      setError(error); // almacenas el error
    }
  };

    return (
    // <div className="loginPage">
    //   <h1 className="loginPage-title">Log in to Twitter</h1>
    //   <form onSubmit={handleSubmit}>
    //     <FormField type="text" name="username" label="phone, email or username" className="loginForm-field"
    //       onChange={handleChange}
    //       value={credentials.username}
    //     />
    //     <FormField type="text" name="username" label="phone, email or username" className="loginForm-field"
    //       onChange={handleChange}
    //       value={credentials.password}
    //     />
    //     <FormField type="text" name="username" label="phone, email or username" className="loginForm-field"
    //     >
    //       {isFetching ? 'Connecting...' : 'Log in'}
    //     </Button>
        {error && (
          <div className="loginPage-error">
            {error.message}
          </div>
        )}
  //     </form>
  //   </div>
  // );
}

export default LoginPage;
```

el error viende desde el servidor en `message` y tu lo capturas. Como en `client.js` en el interceptror estás haciendo un `...error.response.data`

```js
client.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      console.log(error.response);
      // 400/500 server error
      return Promise.reject({
        message: error.response.statusText,
        ...error.response,
        ...error.response.data,
      });
    }
    // Request error
    return Promise.reject({ message: error.message });
  },
);
```

este data tiene un message y por eso sustituye con el mensaje del servidor, si no se que das con el mensaje del  `.statusText,`. En los mensajes si quieres decir `Wrong username/password` ok, pero no por separado porque das datos al hacker.

Fíjate que podemos decir que cuando haya un error se resetee a null

```js
  const resetError = () => {
    setError(null);
  };  
```

y se lo pasamos el return

```js
        {error && (
          <div className="loginPage-error" onClick={resetError}>
            {error.message}
          </div>
        )}
```

así cuando el susario se equivoca lo devuelve de nuevo reseteado.

**control : mientras resuelveuna llamada que no pueda hacer otra**

¿como lo hacemos? en React siempre es **estado**, **estado**, **estado**... ¿quiero saber si hay una llamada justo en ese instante que se hace click en el botón... **estado**? Igual que me he creado un estado de erro, me puedo crear un estado de  `const [isFetching, setIsFeching] = useState(false);` por defecto false de inicio, no estoy haciendo feching

```js
function LoginPage() {
  // const { onLogin } = useAuth();
  // const [credentials, setCredentials] = useState({username: '',password: '',});
  // const [error, setError] = useState(null);
  const [isFetching, setIsFeching] = useState(false);

  ...

  const handleSubmit = async event => {
    // event.preventDefault();

    try {
      setIsFeching(true);
      // await login(credentials);
      setIsFeching(false);
      // onLogin();
      // const to = location?.state?.from?.pathname || '/';
      // navigate(to);
    } catch (error) {
      setIsFeching(false);
      // setError(error);
    }
  };

```

cuando estes haciend la llamada hasta que no se resuelve no cambiamo feching a true, esto sirva para decir si estoy haciendo feching en lugar de devolver toda la página ... al menos poder desabilitar el boton de login, pero podría hacer más cosas. cmo ya tengo un `buttonDisable` para cuando no hay usuario y password lo aprovecho y le digo eso o cuando estoy en feching

```js
  const buttonDisabled = !(username && password) || isFetching;

  // return (
  //   <div className="loginPage">
  //     <h1 className="loginPage-title">Log in to Twitter</h1>
  //     <form onSubmit={handleSubmit}>
  //       <FormField
  //         type="text"
  //         name="username"
  //         label="phone, email or username"
  //         className="loginForm-field"
  //         onChange={handleChange}
  //         value={credentials.username}
  //       />
  //       <FormField
  //         type="password"
  //         name="password"
  //         label="password"
  //         className="loginForm-field"
  //         onChange={handleChange}
  //         value={credentials.password}
  //       />
  //       <Button
  //         type="submit"
  //         $variant="primary"
  //         disabled={buttonDisabled}
  //         className="loginForm-submit"
  //       >
          {isFetching ? 'Connecting...' : 'Log in'}
//         </Button>
//         {error && (
//           <div className="loginPage-error" onClick={resetError}>
//             {error.message}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }



``` 

De esta forma cambias el texto dentro del boton y capas el botón mientras controlas el estado: si `{isFetching ? 'Connecting...' : 'Log in'}` estas `isFetching` me muestras `Log in` y si no `'Connecting...'`. Cambias el texto del boton mientras estás haciendo login y te aseguras que el oton está desabiliatdo.... no puede cortar hasta que no acabe la peticion.

Podrías hacer controlar más errores para el listado, qué ocurre para cuando el api diga que no existe un tweet o cuando intentes crear un tweet y te devuelve un 401

Si queremos manejar el erro cuando estñas en la vista de crear el tweet, tiene que ir a esa vista "What are you thinking?" de creación de tweet que tiene su propio componente `newTweetPage.js`.
* Queremos, a medida que el usuario va escribiendo, queremos decirle cuantos caracteres le quedan hasya agotar los 250 de máximo. 
* Mientras desabilitaos el boton de enviar 
* intentar que no pueda meter más de 250 caracteres
* luego llamaremos al servidor y redirijir al usuario a la pagina del detalle y

Vamos a `service.js` 

```js
import client from '../../api/client';

const tweetsUrl = "/api/tweets";

// export const getLatestTweets = () => {
//   cons url = `${tweetsUrl}?_expand=user&_embed=likes&sort=updateA`
//   return client.get(url);
// }

export const createTweet = tweet => {
  const url = tweetsUrl
  return client.post(url, tweet); // hace una solicitud POST a la URL especificada en la variable url.
}
```

vamos a `NewTweetPage.js` y dentro del compnente necesitaoms un estado para ir almacenando lo que el usuario vaya almacennado 


```js
function NewTweetPage() {
  const [content, setContent] = useState('');
```

en el componente `<Textarea/>` del return de `<NewTweetPage>` tenemos que cualquier `...prop` que le pases terminará dentro del `Textarea`

```js
const Textarea = ({ className, ...props }) => {
  return (
    <div className={clsx('textarea', className)}>
      <textarea className="textarea-input" {...props} />
    </div>
  );
};
```

es decir dentro del componente `<Textarea/>` del return de `<NewTweetPage>` le podemos pasar 

```js
          <form onSubmit={handleSubmit}>
            <Textarea
              className="newTweetPage-textarea"
              placeholder="Hey! What's up!"
              value={content}
              onChange={handleChange} // me creo este evento dentro de la funcion y se la paso a onChange
```

esto lo que hace es que mientras cambia el text area irá cambiadno el "State" de este componenet. lo puede ir viendo con la extensión react de google.

Me creo un par de variable 

```js
const MIN_CHARACTERS = 5;
const MAX_CHARACTERS = 140;

function NewTweetPage() {
  const [content, setContent] = useState('');
  // const [isFetching, setIsFetching] = useState(false);
  // const navigate = useNavigate();

  const handleChange = event => {
    setContent(event.target.value);
  };

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     setIsFetching(true);
  //     const tweet = await createTweet({ content });
  //     navigate(`../${tweet.id}`, { relative: 'path' });
  //   } catch (error) {
  //     if (error.status === 401) {
  //       navigate('/login');
  //     } else {
  //       setIsFetching(false);
  //       // Show error
  //     }
  //   }
  // };

  const characters = `${content.length} / ${MAX_CHARACTERS}`; // ${content.length} informa de cuantos van quedadno
  // const buttonDisabled = content.length <= MIN_CHARACTERS || isFetching;

  return (
    // <Content title="What are you thinking?">
    //   <div className="newTweetPage">
    //     <div className="left">
    //       <Photo />
    //     </div>
    //     <div className="right">
    //       <form onSubmit={handleSubmit}>
            <Textarea
              className="newTweetPage-textarea"
              placeholder="Hey! What's up!"
              value={content}
              onChange={handleChange}
              maxLength={MAX_CHARACTERS} // le dices el maximo de caracteries
  //           />
  //           <div className="newTweetPage-footer">
  //             <span className="newTweetPage-characters">{characters}</span>
  //             <Button
  //               type="submit"
  //               className="newTweetPage-submit"
  //               $variant="primary"
  //               disabled={buttonDisabled}
  //             >
  //               Let's go!
  //             </Button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </Content>
  // );
// }

// export default NewTweetPage;

```
**Regla min caracteres**
UN a regla que me dice que no se habilite le boton hasta que no se hayan ecrito 5 caracteres. 
`const buttonDisabled = content.length <= MIN_CHARACTERS || isFetching;`

```js
// 
//   const characters = `${content.length} / ${MAX_CHARACTERS}`;
  const buttonDisabled = content.length <= MIN_CHARACTERS || isFetching;

  return (
    // <Content title="What are you thinking?">
    //   <div className="newTweetPage">
    //     <div className="left">
    //       <Photo />
    //     </div>
    //     <div className="right">
    //       <form onSubmit={handleSubmit}>
            // <Textarea
            //   className="newTweetPage-textarea"
            //   placeholder="Hey! What's up!"
            //   value={content}
            //   onChange={handleChange}
            //   maxLength={MAX_CHARACTERS}
            // />
            // <div className="newTweetPage-footer">
            //   <span className="newTweetPage-characters">{characters}</span>
              <Button
                type="submit"
                className="newTweetPage-submit"
                $variant="primary"
                disabled={buttonDisabled}
              >
                Let's go!
              </Button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </Content>
  // );
```

Ahora queda hacer el `submit` que lo tenemos en el formulario

```js

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsFetching(true);
      const tweet = await createTweet({ content });
      navigate(`../${tweet.id}`, { relative: 'path' }); // le paso ruta relativa
    } catch (error) {
      if (error.status === 401) {
        navigate('/login');
      } else {
        setIsFetching(false);
        // Show error
      }
    }
  };

  // const characters = `${content.length} / ${MAX_CHARACTERS}`;
  const buttonDisabled = content.length <= MIN_CHARACTERS || isFetching;

  return (
    // <Content title="What are you thinking?">
    //   <div className="newTweetPage">
    //     <div className="left">
    //       <Photo />
    //     </div>
    //     <div className="right">
          <form onSubmit={handleSubmit}>
            <Textarea
  //             className="newTweetPage-textarea"
  //             placeholder="Hey! What's up!"
  //             value={content}
  //             onChange={handleChange}
  //             maxLength={MAX_CHARACTERS}
  //           />
  //           <div className="newTweetPage-footer">
  //             <span className="newTweetPage-characters">{characters}</span>
  //             <Button
  //               type="submit"
  //               className="newTweetPage-submit"
  //               $variant="primary"
  //               disabled={buttonDisabled}
  //             >
  //               Let's go!
  //             </Button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </Content>
  // );
}
```

Vamos ahcer el detalle. Enla práctica el endPoint te puede devolver un 401, o sea que cambiará sobre este ejemplo.

vamos a `service.js`

```js
// import client from '../../api/client';

// const tweetsUrl = "/api/tweets";

// export const getLatestTweets = () => {
//   cons url = `${tweetsUrl}?_expand=user&_embed=likes&sort=updateA`
//   return client.get(url);
// }

// export const createTweet = tweet => {
//   const url = tweetsUrl
//   return client.post(url, tweet); // hace una solicitud POST a la URL especificada en la variable url.
// }

// para verun tweet
export const getTweet = (tweetId) => {
  const url = `${tweetsUrl}/${tweetId}`;
  return client.get(url);
}
```

ya con esto tenemos el `metodo de servicio` para obtener un tweet pasándole el id 

Vamos a `TweetPage.js`. Tenemos el id de la url a través de  `const params = useParams();`. 
Cuanod queremos hacer una llamada a un api desde un componente en el momento de la carga lo hacemos a través de `useEffect()` que tendrá unas dependencias.

El resultado de la llamada al servicio delo voy a almacenar con un `const [tweet, setTweet] = useState(null);` ; lepodrías definir también un dispeching o un inloginpero no lo haremos, tenlo en cuenta para la practica.

A la hora de pintar, si hay un tweet que me pinte `{tweet && (<div><code>{JSON.stringify(tweet)}</code></div>)}`

```js
function TweetPage() {
  const params = useParams();
  // const navigate = useNavigate();
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    getTweet(params.tweetId) // llamo al metodo del servicio
      .then(tweet => setTweet(tweet)) // lo paso para que renderice
      .catch(error => { // si hay error
        if (error.status === 404) {
          navigate('/404');
        }
      });
  }, [navigate, params.tweetId]); // debes incluir las dependencias porque dependen de estas funciones de dentro
  // esto te lo pide por si fflla, aunque quieras solo la primera iteracion

  // return (
  //   <Content title="Tweet detail">
  //     <div>
        Tweet detail {params.tweetId} goes here...
        {tweet && (
          <div>
            <code>{JSON.stringify(tweet)}</code>
          </div>
        )}
//       </div>
//     </Content>
//   );
// }

// export default TweetPage;

```

si te vas al navegador `localhost:3000/tweets/4` le pides al servidor el tweet y puedes ver que puedes sacar el detalle. Si pides uno que no existe y te da error `message: notfound` es que no tienes el status, por eso en client hemos puesto

```js
      // return Promise.reject({
      //   message: error.response.statusText,
        ...error.response, // de esta forma tendrás un status 404
        // ...error.response.data,
```

si el usuario teclea cualquier navegacin que no existe lo derivamos al 404


### prop types - asegurar que los componentes se utilizan con los tipos esperados

Actualmente casi es estandar trabajar con TypeScrip TS ; pero hasta ahora JS tenía la librería **react prop types** https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
Esta paquete compruera que los tipos que pasamos en los componentes son las que esperamos. React recomienda TS https://react.dev/reference/react/Component#static-proptypes

Vamos a formar utilizar el paquete `prop-types`

```sh
npm i prop-types
```
vamos a buscar componentes que tengan `props` cada componente es una función

`const LikeButton = ({ likes, isLike, onLike }) => {` esta define la propiedad `likes` que devería ser un numero , recibe un `dislike` como booleano y `onLIke` que es una función 

```js
const LikeButton = ({ likes, isLike, onLike }) => {
  const Icon = isLike ? IconLiked : IconNotLiked;

  return (
    <div
      className={clsx('likeButton', {
        'likeButton--active': isLike,
      })}
      onClick={event => {
        event.preventDefault();
        onLike(event);
      }}
    >
      <span className="likeButton-icon">
        <Icon width="20" height="20" />
      </span>
      <span className="likeButton-label">{likes}</span>
    </div>
  );
};
```
si allá donde utilicemos el componente, yo no le paso la función... nos dará error porque cuando ejecutes el click del botón intentará usar una función que no se le ha pasado

```js
  <LikeButton
    //onLike={event => console.log(event)} <-- error si no pasas la función
    likes={likes.length}
  />
```

pero en tiempo de escritura no tienes quejas de React, no tienes el feedback que TS si que te da. Solo tenemos un paquete `prop-types` de ayuda que chekea en tiempo de ejecución comprovando sobre todas las propiedades que hayas declarado en el componente.


Con React permite definir una propiedad estática para cada función/ componente; En JS las funciones son objetos y como objeto puedo crea cualquier atributo. Pues React va a mirar el atributo `prop-types` de la funcion/componente. Y lo que tienes es que pasar los atributos del componente.

```js
import PropTypes from 'prop-types';

const LikeButton = ({ likes, isLike, onLike }) => {
...
};
...
// declaras los tipos del componente
LikeButton.propTypes = {
  likes: PropTypes.number.isRequired,
  isLike: PropTypes.bool, // esta no es requerida 
  onLike: PropTypes.func.isRequired,
};
```

Por cada componente puedes declara viene a establecer que valores quiero por defecto para una propiedad cuando no me la pasan , en esta caso `isLike: PropTypes.bool,`

```JS
LikeButton.defaultProps = {
  isLike: false,
};
```
también podrías hacer esto  `const LikeButton = ({ likes, isLike=false, onLike }) => {`

Ahora tendrás error si lepasas o que no es : `react-jsx-dev-runtime.development.js:87 Warning: Failed prop type: Invalid prop `onLike` of type `number` supplied to `LikeButton`, expected `function`.`

```js
  <LikeButton
    onLike={5} <-- error si no pasas la función
    likes={likes.length}
  />
```

`prop-types` no sabe que va a fallar, pero sabe que usas una propiedad mal, te advierte en tiempo de desarrollo, no lo pases si no está bien a modo producción! 
Lo ideal es `TS` y que te olvides de esto, pero es una herramienta muy util para `JS`.

https://www.npmjs.com/package/eslint-plugin-react es un pligun que te avisa si no has puesto `propTypes` es un buen primer paso para asegurarte q como desarrollador estás aplicando proptypes. En tu configuracion json puedes añadirle y forzar sta regla

```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "rules": {
    "react/prop-types": "error"
  }
```

esto te avisará en cada componente hasta que las declares importante `proptypes` en cada componente y atributo.

### Refs

Las "Refs" en React son una característica que permite acceder a los nodos del DOM (componentes) de forma directa. En un entorno de React, normalmente se manipula el DOM de manera indirecta a través del estado y las propiedades (props). Sin embargo, hay situaciones en las que necesitas una forma de interactuar directamente con un elemento del DOM, y aquí es donde entran las Refs.

Por ejemplo, podrías querer enfocar un campo de texto automáticamente cuando se carga un componente, o necesitar las dimensiones exactas de un elemento para ciertos cálculos. Las Refs hacen esto posible.


Imaginate que en `NewTweets` quieres un contador para saber cuántas veces ese componente es renderizado. ¿que tipo de datos ncesitaríamos para almcenar dentro de ese componete un valor que nos diga cuantas veces se ha renderiado? una prop no sería porque nos la pasa desde fuera.

```js
function NewTweetPage() {
  const [content, setContent] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const [counter , setCounter] = useState(0);

 
  useEffect(())=> {
    setCounter(c = c + 1);
  }

  ...
```

Has de tener claro que siempre que se ejecute un `useState` siempre se ejecutará de nuevo la función `NewTweetPage` se renderizará cada  vez. Cuando yo llamo una funcion `setCounter` (setCounter) de un estado (useState) y se actualiza,  ese compoinente se renderia de nuevo. Siempre que llames a un `set__(algo)__` eso fuera a un render. 


**Refs**

Es la diferencia básica entre el Estado y una **Refs** es que yo una **Refs** la puedo cambiar sin problema de que me vaya a provocar un nuevo rendimiento de del componente.

A veces has de almacenar dentro del componete cierte infromación.

Tbn tienen otros usos. 

Yo a través del `return` que es JSX declaro o decido como va a ser mi DOM, mi vistas, sin necesidad hasta ahora de acceder al elemento real del DOM para hacer ninguna operacion.
Si en algún momento te ves en la necesidad de tener que acceder a un elemento del `dom` por codigo en React tiene una herramienta para eso, nunca un get.element() nosotros usaremos una ref.


Imagina que quieres una ref de este formulario

```js
const formRef = useRef(null); // lo llamo porque quiero así formRef

return (
  <Content title="What are you thinking?">
    <div className="newTweetPage">
      <div className="left">
        <Photo />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>  <----------- este
          <Textarea
            className="newTweetPage-textarea"
            placeholder="Hey! What's up!"
            value={content}
            onChange={handleChange}
            maxLength={MAX_CHARACTERS}
          />
```

si se lo pasas al `<form onSubmit={handleSubmit} ref={formRef}>`

lo que hará react cuando este elemento lo monte en el DOM metrá dentro del `ref` el elemento propiamente dicho `form` y yo tendré a mi disposición ese elemento por si lo necesito llamar para hacer un lo que sea

la manera de react para acceder al elemento propiamente dicho es mediante una ref. Ejemplos:

**Enfoque Automático en un Campo de Texto**: Puedes usar una Ref para enfocar automáticamente un campo de texto cuando se carga un componente. Esto es útil en formularios o cuadros de búsqueda.
**Manejo de Animaciones o Transiciones**: Las Refs son útiles para manipular directamente elementos del DOM para animaciones o transiciones, especialmente si estás usando una librería de animación que requiere referencias directas a los elementos del DOM.
**Integración con Librerías de Terceros**: Las Refs son útiles para integrar con librerías de terceros que interactúan directamente con el DOM, como jQuery, D3.js, etc.
**Medir Dimensiones de Elementos**: Puedes usar Refs para medir las dimensiones de un elemento, lo cual puede ser necesario para ciertos cálculos de diseño o para respuestas dinámicas a cambios en el tamaño.
**etc**

Recuerda que el uso de Refs debe ser moderado y solo cuando sea realmente necesario, ya que el abuso de estas puede llevar a prácticas que rompen con el flujo de datos "top-down" de React.

Además puedes pasar al DOM `<form>` pero no a los componenets `<Button>`

video FundamentosReact5 1h25'


### Performance

Lo primero es tener claro, cuándo renderiza un componente (que el codigo de un comonente lafuncion se jecuta y develve un nuevo elemento Reatc) entonces cada vez que haya un cambio de estado o más arriba de este componente haya un cambio de estado o bien haya cambio de un contexto que haya ejecuatado, el componete se va a ejecutar, se va a renderizar de nuevo, va a crear un nuevo elelemtno de react. 

Los elelemtnos react ya vimso que son objetos tienen las Props y son objetos muy, muy ligeros y no es un problema recrearlos en cada red para no es un problema recrearlos en cada red, y tampoco es un problema para abrir después hacer el ajuste entre lo que tienes en el virtual don y el virtual y el don real.

Qué pasa que a veces sí que podemos meternos otros componentes que les cuesten analizar por defecto los que hemos visto, no pero a veces sí que vamos a meter componentes, que sean más pesados de renderizar vamos a aportar esa situación un poco a veces de un componente renderizar un componente que pueda ser un momentodado pesado de renderizar ¿Qué significa pesado renderizar, Pues básicamente es que cuando estoy ejecutando el código de esa función, pueda haber retardo.

porque tenga un cálculo complejo, internamente pues eso es un problema por eso es un problema y puede hacer que mi que mi navegador incluso llegue a colgarse recordad queJavascript es un hído. Solo tengo un hilo en el navegador. Es mientras estoy haciendo una cosa, no puedo estar haciendo otra, aunque el javascript dé la sensación de que a través de la sincronía pueda manejar distintas cosas a la vez es falso sabes, que solo puede manejar una cosa a un tiempo mientras se está ejecutando una línea de congo no se está ejecutando otra enparalelo Web Workers a parte.

En React, "Performance" se refiere generalmente a cómo de eficientemente una aplicación hecha en React rinde en términos de velocidad y uso de recursos. Dado que React es una biblioteca para construir interfaces de usuario, su rendimiento está estrechamente ligado a cuán rápidas y responsivas se sienten estas interfaces para el usuario final. 

Si el cambio de estado está en el padre de todo, rendizará todo el arbol. Si está localizado rendizará poca cosa. 

Se mantiene una especie e memorizacion, caché para que todo esto no suceda.

**MEMO**

2:42' FundamentosReact5

En el contexto de React, React.memo es una función de orden superior que sirve para optimizar el rendimiento de componentes funcionales. Lo que hace React.memo es memorizar (o "recordar") el resultado del renderizado de un componente para evitar renderizados innecesarios.

Cuando envuelves un componente con React.memo, React realizará una comparación superficial de las props anteriores y las nuevas en cada renderizado. Si las props no han cambiado, React reutilizará el último resultado renderizado, evitando así un renderizado innecesario del componente.

Aquí hay un ejemplo básico de cómo se utiliza React.memo:

```JS
const MyComponent = React.memo(function MyComponent(props) {
  // Tu componente aquí
});

```

### Lazy loading y code splitting

lazy permite retrasar la carga del código de un componente hasta que es realmente necesario
Cuando cargamos un componente con lazy el código del componente (src_MyButton_js.chunk.js) es separado del bundle principal (bundle.js)

Con Suspense podemos definir una interfaz alternativa que será presentada mientras descarga el código del componente (loader, spinner...)

```js
import { Suspense, lazy } from 'react';
const MyButton = lazy(() => import('./MyButton'));
```

`() => import('./MyButton')` esto le está diciendo que este componente lo cargará a parte, sólo cuando lo necesitemos. Estamos introduciendo un retardo, reac nos pide que esa carga la tenemos que envolver en un componete suspense. e decir cuando se den las conticiones para que al usuario se pida el codigo de mybutton y como en ese momento justo mi app no puede dar ese codigo porque lo tengo que descargar del servidor, pues mientras se produce esta descarga , lo que le estaremos mostrando será ese elemento que le hemos pasado como caalback `fallback={<div>Loading...</div>}>` al suspense

```js
export default function App() {
 return (
    <Suspense fallback={<div>Loading...</div>}> 
      <MyButton>Click me</MyButton>
    </Suspense> );
}
```

es como una manera declarativo de mosar algo mientras estás descargando el codigo de myButton y cuando se descargue se muestra el compnente.

Vamos hacerlo para el `login` de nuestra `App.js` aplicación `import LoginPage from './pages/auth/LoginPage';` lo que haremos será importarlo  modo lasy

```js
import { Suspense, lazy } from 'react';

const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
```

ya tienes el componente cargado modo `lazy` pero para que lo haga bien hay que meter el elemento `login` en un suspense

```js
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        }
      />
```

de esta forma podrás mostrar algo `Loading...` mientars se descarga el componente.  la proxima vez ya no mostrará nada porque ya estaré descargado. Todo lo que haya dentro del suspense aunque pongas un div con informacion no se mostrará, solo el fallback

https://blog.openreplay.com/data-fetching-with-suspense-in-react/


### error boundary

https://legacy.reactjs.org/docs/error-boundaries.html


https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary


Para usar error boundary hay que usar clases

La idea de error Bondary es tener un proviene de error de captura de errores muy arriba o tantos como necesitemos de manera que si se produce algún error no esperado en algún render en mi árbol de react este error bondary que está situado en lo másalto de mi aplicación. Me capture el error y yo le pueda, mostra un mensaje de error al usuario determinada, es un poco la idea esto es para capturar errores de render vale o sea errores del api yo los control si yo quiero un error que 401 y hago lo que sea el 404 elcontrol, pero hay veces que se pueden producir errores no esperados. ¿Vale? Y cómo se manejan todos esos errores no esperados. Es decir si en algún momento, en algún render ejecutando la funcion de algún componente, pero lo que es el render hay un error, lo puedo capturar en boundary y a partir de ahí trabajar con el erro, es una especie de try cath, pero noceitamos algun metodo de clico de vida asicado a la clase react componente y que v a asaltar un compnete cuando hay cualquier eror debajo de el.

Vamos a ver como se crea un compnetede tipo clase y ver como trabaja boundery.

Yo tengo un componente `App` pues por encima de el, en el incluso en el `index` voy a meter un error boundary para que si se poduce algun error de render en todo el arbol de la plicacion pueda capturarlo.

creo carpeta en `compontents/error/ErrorBoundary.js` creo el componente con clase en react


una clase que extienda de `React.Componente` es un componente de React `class ErrorBoundary extends React.Component {}`

podemos crear componentes con funciones pues también podemos crear componentes para clases pero nadie lo hace salvo para esto
```js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {// constructor, que recibe datos,
    super(props);     // componente trabaja dos datos, props y stado, desde fuera recibe props
    this.state = {    // creo estado en componente tipo clase, es como use.state de las funciones
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) { // se ejecuta cuando hay errro dentro del componente ErrorBoundary 
    this.setState({ error, info }); // captura cambio de estado, para hacer un render nuevo del componete
  }

  render() { // siempre ha de tener un metodo render que devuelve el JSx
    const { error, info } = this.state;

    if (error) {
      return (  // todo esto es lo que devuelve
        <div>
          <h1>Ooops! There was an error</h1>
          <div>
            <code>{error.message}</code>
          </div>
          <div>
            <code>{JSON.stringify(info)}</code>
          </div>
        </div>
      );
    }
    return this.props.children; // si no error, muestro lo que metes en Brapel
  }
}

export default ErrorBoundary;
```

¿de qué errores queremos estar pendientes en `index`? al nivel que quiera

```js
root.render(
  <React.StrictMode>
    <ErrorBoundary> <----- aqui por ejemplo
      <BrowserRouter>
        <AuthContextProvider initiallyLogged={!!accessToken}>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </ErrorBoundary> <----- aqui por ejemplo
  </React.StrictMode>,
);
```
siempre saltará el componente `componentDidCatch(error, info) ` de la clase `ErrorBoundary`

https://reactrouter.com/en/main/route/error-element


https://nextjs.org/docs/pages/building-your-application/configuring/error-handling


https://remix.run/docs/en/main/guides/errors


### portals

para migraciones grandes que sirven desde el servidor co jsp o cosas complejas que quiero meter desde determindas partes de html que quiero meter componentes de react ; pues a través de los poratls yo puedo ser selectivo y ver donde quiero meter el html generado por React

https://react.dev/reference/react-dom/createPortal

un portal es un compnente que en lugar de renderizarse donde lo toca se renderiza en cualquier parte del dom que yo quiera.

Si vamos a la pagina login podemos ver desde el punto de vista de react como está formada su genealogía

```sh
BrowserRouter
└── Router
    └── Navigation.Provider
        └── Location.Provider
            └── AuthContextProvider
                └── Context.Provider
                    └── App
                        └── Routes
                            └── RenderedRoute
                                └── Route.Provider
                                    └── LoginPage
                                        ├── FormField
                                        ├── FormField
                                        └── styled.button
```

desde el punto de vista del DOM va en paralelo dentro del body

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... your head contents ... -->
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <div class="loginPage">
      <!-- ... your login page contents ... -->
    </div>
```

a través de lo sportals yo le puede decir que este ` <div class="loginPage">` se renderice en otra parte fuera del que sería su sitio natural, pero con una salvedad, que desde el punto de vista de react siempre será hijo de `App` porqie lo hemos definido así:

```js
function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        }
      />
```

pero lo vamos a colorar fuera a nuvel de html incluso dentro de ota ventana, en modo flotante en otra ventana.

Hay una funcion que es `createPortal` que premite renderizar un determinado elemento react pero en una parte diferente del DOM. https://react.dev/reference/react-dom/createPortal

me creo en `index.html`dos con diferenetes nombre para ver las diferencias

```html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <div id="portal"></div>
```

ahora mismo todo cualqga en mi app dentro del 

```html
  <div id="root">
    <div class="loginPage">
      <!-- ... your login page contents ... -->
    </div>
```

porque nosotros ahora mismo cuando renderizamos le estamos diceiendoq ue lo meta en `getElementById('root')`

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider initiallyLogged={!!accessToken}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
```

pero lo vamos a sacar y lo metemos en `<div id="portal"></div>` para es vamos atransofrmar ligerament e `loginPage.js`

entonces creamos una funcion `LoginPagePortal ` que devuelva `createPortal(<LoginPage />` del componente <LoginPage /> pero en lugar de que vaya en su sitio que vaya en `document.getElementById('portal')` y exportamo export default `LoginPagePortal`;

create portal no es de react es de react dom `import { createPortal } from 'react-dom';`

```js
// import { useState } from 'react';
// import Button from '../../../components/shared/Button';
// import FormField from '../../../components/shared/FormField';
// import { login } from '../service';
// import { useAuth } from '../context';

// import './LoginPage.css';
// import { useLocation, useNavigate } from 'react-router';
import { createPortal } from 'react-dom';

function LoginPage() {
}

function LoginPagePortal (){
  return createPortal(<LoginPage />, document.getElementById('portal'))
}

export default LoginPagePortal;

```

ahora tenemos renderizado el html en portal

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="portal">
    <div class="loginPage"></div>
  </div>
  <div id="root"></div>
```

sin embargo desde el mismo de vista de react está en el mismo sitio. Y yo solo lo he movido en el dom. Si este componente estuviara reciviendo propiedades por ejemplo desde 

parace una tontería pero tiene bastantes utilidades ¿cuales son?

Te puede permitir abrir parte de la aplicacion en otra ventana completamente, entonces puedes tener un detalla de lo que sea en otra ventana y el usuario lo puede arrastar y llevarse a otro monitor distinto, todo puede acurrir en varias ventanas distintas. Desde el punto de vista de react todo sigue igual pero desde el DOM te lo llevas a otros sitios

Vamos a mejorar el ejemplo de antes:

```js
function LoginPagePortal (){
  const portalContaincer = useRef(document.createElement('div'));
  
  return createPortal(
    <LoginPage />, 
    portalContaincer.current
  );
}
```

esto `portalContaincer` es un div. Voy a meterlo dentro de una ventana que voy a crear nueva.

para crea una nueva ventana necesito un efecto y cuando termine el primer render meto estwe div en una ventana nueva. Cuanod cargues el login el efecto te creará una nueva ventana.


```js
function LoginPagePortal ({count}){
  const portalContainer = useRef(document.createElement('div'));

  useEffect(() => {
    const externalWindow = window.open(
      '', '', 'width=600, heigth=400, left=200, top=200'
      );
    externalWindow.document.body.appendChild(portalContainer.current);
  });

  return createPortal(<LoginPage count={count}/>, portalContainer.current);
}

export default LoginPagePortal;

```

Verás que la ventana emergente no tiene estilos, pero aquí tiene un reportaje para dárselos :
https://david-gilbertson.medium.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202


Para guardar los estiles en la ventana emergente, copia los estilos que tenemos en el `document` que el document es donde hemos arrancado la aplicacion y los compia en `externalWindow.document` con la funcion copyStyles `copyStyles(document, externalWindow.document);`

```js
    copyStyles(document, externalWindow.document);
```

he creado la funcion en `scr/utils/copyStyles.js` 

```js
export default function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    if (styleSheet.cssRules) {
      // for <style> elements
      const newStyleEl = sourceDoc.createElement('style');

      Array.from(styleSheet.cssRules).forEach(cssRule => {
        // write the text of each rule into the body of the style element
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) {
      // for <link> elements loading CSS from a URL
      const newLinkEl = sourceDoc.createElement('link');

      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}
```

estas ventanas s eutilizan para:

* **Popup Blocker**: The browser's popup blocker is preventing the window from opening. This is the most common reason. Users typically need to allow popups for the specific site, either by clicking on the popup blocker notification in the address bar or adjusting the browser settings.  
* **Browser Extensions**: Certain browser extensions that are designed to block popups or scripts can prevent window.open from working correctly.  
* **Browser Policy**: Some browsers have strict policies when it comes to opening new windows. For example, popups can be blocked if window.open is not directly triggered by a user action, like a click event.  
* **Content Security Policy (CSP)**: If your site has a Content Security Policy in place, it may restrict the use of window.open depending on its directives.  

Browser Bugs or Features: Occasionally, certain browsers may have bugs, or they might have features that affect how window.open works.

### Dockers

Vamos a ver como podemos dockerizar nuestra aplicacion. Para poner en marcha nuestra aplicacion sól necesitamos un servidor de archivos estáticos.

Docker es una plataforma de contenedores que permite a los desarrolladores, operadores de sistemas (SysOps) y administradores de sistemas (SysAdmins) construir, ejecutar y compartir aplicaciones con contenedores. Los contenedores son esencialmente un paquete de software ligero que contiene todo lo necesario para ejecutar un pedazo de software, incluyendo el código, el entorno de ejecución, las bibliotecas y las dependencias. Docker se utiliza en aplicaciones por varias razones: Consistencia y Aislamiento, Desarrollo y Pruebas,Despliegue Rápido,Escala y Gestión,Microservicios,Integración Continua/Entrega Continua (CI/CD),Infraestructura como Código (IaC),Eficiencia de Recursos,

En resumen, Docker ha transformado el desarrollo y despliegue de aplicaciones gracias a su facilidad de uso, portabilidad, eficiencia y la amplia adopción en la industria, que ha llevado a un ecosistema robusto de herramientas y plataformas compatibles.


Con una serie de instrucciones le vas diciendo qué vas a construir.

creo archivo `Dockerfie` en ./

por un lado necesito 
* construir mi aplicacion con `npm run build` en un primer paso necesito ejecutior esto `"build": "react-scripts build",` del archivo json y para eso necesito una imagende node porque tu puedes hacer eso ahora porque tiene un node.
* entonces tendrás una serie de archivos estaticos de salida, un html, un css, un js , imagenes,etc esos ficheros se los pasamos una servidos enjaini y lo pasamos al servidor


cuando en terminal lanzamos `npm run buid`

```sh
➜  FullStack_React_app_tweeter git:(main) npm run build

> twitter-react@0.1.0 build
> react-scripts build

Creating an optimized production build...
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
  
Compiled successfully.

File sizes after gzip:

  83.05 kB  build/static/js/main.b1d6c58f.js
  1.31 kB   build/static/css/main.183258a4.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment
```

crea una carpeta con una serie de archivos estaticos dentro de `./build`


```Dockerfile
# se descargará esa imagen con el ejecutable de node
FROM node:20-alpine as builder
```

mi directorio de trabaja en la imagen descargada creará un directorio de trabajo que lo voy a llamar `WORKDIR /app`. Copiaré el contenido del fichero `COPY package*.json ./` y lo copiará a la carpera /app. `RUN npm install`.

```Dockerfile
# bajo imagen y creo container
FROM node:20-alpine as builder

# dentro del contenedor creo carpeta app
WORKDIR /app`

# copio contenido package json
COPY package*.json ./

# Hagp instalacoin todas las dependencias
RUN npm install 

# copio todo el codigo
COPY . .

# Creo el ejecutable
RUN nmp run build

```

Ahora en el container donde se esté ejecutando esto yo voy a tener una carpeta `build` lo que tengo que hacer es tomar esa imagen del buid y pasárselo a un container basado en `nginx`, entonces voy a descargar la imagen `# me descargo un contenedro muy ligero con un servidor nginx ; FROM nginx:stable-alpine`

```Dockerfile
# Utiliza una imagen base de node versión 20 con alpine como sistema operativo por ser ligero.
FROM node:20-alpine as builder

# Establece el directorio de trabajo en /app dentro del contenedor. Si no existe, lo crea.
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe) al directorio de trabajo actual (/app).
COPY package*.json ./

# Ejecuta el comando npm install para instalar las dependencias definidas en package.json.
RUN npm install 

# Copia todos los archivos del directorio actual en el host al directorio de trabajo en el contenedor.
COPY . .

# Ejecuta el comando para construir la aplicación (por ejemplo, si es una aplicación React, esto crea la build de producción).
RUN npm run build

# Inicia una nueva etapa de construcción utilizando una imagen base de nginx, que es un servidor web ligero.
FROM nginx:stable-alpine

# Copia los archivos estáticos generados build al directorio de nginx donde servirá los archivos estáticos.
COPY --from=builder /app/build /usr/share/nginx/html

# Reemplaza la configuración por defecto de nginx con la configuración personalizada (si existe).
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Informa a Docker que el contenedor escuchará en el puerto 80 en tiempo de ejecución.
EXPOSE 80 

# Define el comando que se ejecutará cuando se inicie el contenedor.
# Aquí está diciendo que ejecute nginx en primer plano.
CMD ["nginx", "-g", "daemon off;"]
```


con `nginx.conf` le damos las indicaciones minimas para levantar en el puerto 80

```conf
server {
    listen: 80;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html = 404;
    }
}
```


`dockerignore` le decimos qué fichermos no queremos que suban a la imagen.

Arrancamos nuestro servidor.

1. contruimos la imagen `docker build . -t twitter-react` va al directorio ./ buscar archivo `dockerfile` y segue las instruciones. La damos el nombre con `-t twitter.react`
2. ... construyendo... ➜  FullStack_React_app_tweeter git:(main) ✗ docker build . -t twitter-react
[+] Building 119.8s (17/17) FINISHED 
3. He creado esta imagen, con 47 MB con la app preparada para lanzarla: ➜  FullStack_React_app_tweeter git:(main) ✗ docker image ls                   
REPOSITORY           TAG       IMAGE ID       CREATED          SIZE
twitter-react        latest    ceb2c5247302   46 seconds ago   47.4MB
4. le tengo que decir en que imagen me vaso `docker container run -d -p 80:80 twitter-react:latest` con `-d` le dice que te devuelve el control de la consola, y con `-p 80:80` le hace un mapeo de puertos

ya tienes tu contenedor corriendo  `docker container ls -a     `

CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS                        PORTS                                                    NAMES
fdbf20ef33c9   twitter-react:latest   "/docker-entrypoint.…"   41 seconds ago   Exited (1) 40 seconds ago                                                              wonderful_almeida
 
si te vas a `localhost:80` verás que ya funciona y si inspeccionas veras que el server es `nginx`


Puedes 
* parar el container con `docker container stop +NAME`
* arrancar `docker container stop +NAME`
* eliminar ``docker container rm +NAME`
* volver a recrearlo `docker container run -d -p 80:80 twitter-react:latest`


hub.docker.com/search?

yo hace años que no instalo por ejemplo una base de datos, ni SQL ni MONGO porque es un royo, con docker la instalo y desintalo muy faoi

```sh
docker run --name some-mongo -d mongo:latest
```
Cuando ejecutas una imagen de MongoDB en tu computadora utilizando Docker, la capacidad de almacenamiento disponible para MongoDB dependerá de la configuración de tu Docker host. Específicamente, la capacidad será la misma que la del volumen o partición de tu sistema donde Docker almacena sus datos.

Por defecto, MongoDB almacenará sus archivos de datos en /data/db dentro del contenedor. Si no has configurado un volumen Docker para persistir los datos, entonces el contenedor usará el sistema de archivos de la capa de escritura del contenedor, que está sujeto a limpieza si eliminas el contenedor.

Si necesitas persistir los datos (lo cual es común para bases de datos), deberías montar un volumen cuando ejecutes el contenedor, como se muestra en el ejemplo de abajo:`docker run --name some-mongo -v /my/own/datadir:/data/db -d mongo`
`


