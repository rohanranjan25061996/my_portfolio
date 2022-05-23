import HTML5 from "../../assets/images/TechPic/html.svg";
import CSS3 from "../../assets/images/TechPic/css.svg";
import REACT from "../../assets/images/TechPic/react.svg";
import REDUX from "../../assets/images/TechPic/redux.svg";
import NODE_JS from "../../assets/images/TechPic/nodejs.svg";
import MONGODB from "../../assets/images/TechPic/mongoDB.svg";
import MSSQL from "../../assets/images/TechPic/mysql.svg";
import GIT from "../../assets/images/TechPic/git.svg";
import GITHUB_PAGES from "../../assets/images/TechPic/github.svg";
import JAVASCRIPT from "../../assets/images/TechPic/js.svg";
import Solidity from "../../assets/images/TechPic/solidity.svg"
import ALJ from "../../assets/images/TechPic/ALJ.png"
import shoes4us from "../../assets/images/TechPic/shoes4us.png"
import fatsecret from "../../assets/images/TechPic/fatsecret.png"
import gdg from "../../assets/images/TechPic/gdg.png"
import onlineEditor from "../../assets/images/TechPic/online-editor.png"
import starWars from "../../assets/images/TechPic/star-wars.png"
import SafeHouse from "../../assets/images/TechPic/SafeHouse.png"
import NFTVisualizer from "../../assets/images/TechPic/NFTVisualizer.png"
import MultiSigWallet from "../../assets/images/TechPic/MultiSigWallet.png"
import EscrowContract from "../../assets/images/TechPic/EscrowContract.png"
import SafeHelp from "../../assets/images/TechPic/Safe&Help.png"

export const projects = [
   {
      project_name: "Safe House",
      project_image: SafeHouse,
      Project_description:
         " A safe house is a multisignature wallet dapp based on ethereum. A user can create multiple safe and new owner for particular safe or delete exitsing onwer from safe. User will be able to create new transaction, when the transaction approved by all owners of the particular safe then we are able to coniform the transaction.",
      github_link: "https://github.com/rohanranjan25061996/tripod-team",
      deployed_link: "https://www.loom.com/share/00bb3076e1df487984af75853ecc69fc",
      technologies: [
         HTML5,
         CSS3,
         JAVASCRIPT,
         REACT,
         Solidity
      ],
   },
   {
      project_name: "NFT Visualizer",
      project_image: NFTVisualizer,
      Project_description:
         "A NFT Visualizer is like open sea testnet network visulaizer. A user have to connect to his wallet, after that we will be able to fetch all NFT's ERC721, ERC1155, by deployed on rinkeby testnet n/w of that particular wallet address.",
      github_link: "https://github.com/rohanranjan25061996/nft-visualizers",
      deployed_link: "https://www.loom.com/share/100c60f298164adf9cdb283b7df15a73",
      technologies: [
         HTML5,
         CSS3,
         JAVASCRIPT,
         REACT,
         Solidity
      ],
   },

   {
      project_name: "MultiSigner Wallet",
      project_image: MultiSigWallet,
      Project_description:
         "A MultiSig wallet is a digital wallet that operates with multisignature addresses. This means that it requires more than one private key to sign and authorize a crypto transaction or, in some cases, that several different keys can be used to generate a signature.",
      github_link: "https://github.com/rohanranjan25061996/Multi-Sig-Wallet",
      deployed_link: "https://www.loom.com/share/395ab663a24141e0a76d462e2b1de007",
      technologies: [
         HTML5,
         CSS3,
         JAVASCRIPT,
         REACT,
         Solidity
      ],
   },

   {
      project_name: "Escrow Contract",
      project_image: EscrowContract,
      Project_description:
         "An escrow agreement is a contract that outlines the terms and conditions between parties involved, and the responsibility of each. Escrow agreements generally involve an independent third party, called an escrow agent, who holds an asset of value until the specified conditions of the contract are me",
      github_link: "https://github.com/rohanranjan25061996/escrow-contract",
      deployed_link: "https://www.loom.com/share/7eb6e71e828e4f748587d2c11c1b5f30",
      technologies: [
         HTML5,
         CSS3,
         JAVASCRIPT,
         REACT,
         Solidity
      ],
   },

   {
      project_name: "Safe & Help",
      project_image: SafeHelp,
      Project_description:
         "Save & Help is a web application which is basically inspired with Ketto.org (https://www.ketto.org/) As we know that there is so many people in this world who is suffering from different different reason but the most common is full of hungry people and also people suffering from illness. So many NGO and individual people is working for helping them, this is just one step for those people who can help them with digital money like ethereum etc. This web application is deployed on ethereum test n/w rinkeby.",
      github_link: "https://github.com/rohanranjan25061996/blockchain-crowd-fund-raisers",
      deployed_link: "https://www.loom.com/share/0a1c9149c46d49ca84f20ef088d4f316",
      technologies: [
         HTML5,
         CSS3,
         JAVASCRIPT,
         REACT,
         Solidity
      ],
   },



   {
      project_name: "Shoes4Us",
        project_image: shoes4us,
      Project_description:
         "Shoes4Us is e-commerce website for Footwear lovers, all top brand shoes you will get in one roof.Self-endeavour of creating a completely functional e-commerce website for footwear integrating various real- life components. Tech Stack : HTML, CSS, Javascript, React",
      github_link: "https://github.com/rohanranjan25061996/shoes4usrohanreact",
      deployed_link: "https://shoes4usrohan.netlify.app/",
      technologies: [HTML5, CSS3, JAVASCRIPT, REACT],
   },
   {
      project_name: "Online Editor",
        project_image: onlineEditor,
      Project_description:
         "Online Editor for HTML, CSS, Javascript code. Which will run live. Code is also persist when we refresh the page.",
      github_link: "https://github.com/rohanranjan25061996/online-editor",
      deployed_link: "https://rohan-online-html-css-js-editor.netlify.app/",
      technologies: [HTML5, CSS3, JAVASCRIPT, REACT],
   },
];
