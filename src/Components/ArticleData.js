export function extractHashnodeData(data) {
    const { publication } = data;
    const { posts } = publication;
    const { edges } = posts;
  
    return edges.map(({ node }) => ({
      title: node.title,
      introductionContent: node.brief,
      image: node.coverImage.url,
      linkToArticle: node.url,
      tags: node.tags.map((tag) => tag.name),
      publishedAt: node.publishedAt?.slice(0, -5)?.replace('T', ' ')

    }));
  }

  export const tagData =()=>{
    const { publication } = myData;
  const { posts } = publication;
  const { edges } = posts;

const allTags = [...new Set(edges.flatMap(({ node }) => node.tags.map((tag) => tag.name)))];

  return allTags;

  }

  export const introductionPost ={
    title: "How to Build a Secure and Decentralized Blog Website on the Blockchain",
      introductionContent: "Beyond cryptocurrencies, Blockchain technology offers tools to build secure, transparent applications fully controlled by the user. Building a blog website on the blockchain allows the user to establish a censorship resistant space where they retain full ownership of their content and data.In this article, we will look at how to create and host your blog website on the blockchain using Juno. Juno is an open-source Blockchain-as-a-service platform that offers a fully decentralized and secure infrastructure for your applications. This article will cover setting up a boilerplate project, configuring the hosting, developing the code for your blog and deploying the project on the blockchain using some of Juno's super powers.By the end of this article, you will have an understanding of how Juno works, how to host your websites on the blockchain and how to automate the different tasks using Github Actions.",
      image: "https://juno.build/assets/images/project-complete-b24c4bfccb40cfd234cd724b34dc978b.png",
      linkToArticle: "https://juno.build/blog/how-to-build-a-secure-and-decentralized-blog-website-on-the-blockchain",
      tags: "Blockchain",
      publishedAt: "April 30, 2024"

  }





export const myData = {
      "publication": {
        "isTeam": false,
        "title": "Sam-the-tutor",
        "posts": {
          "edges": [
            {
              "node": {
                "title": "How to create a Staking Dapp on the ICP Blockchain using React and Motoko",
                "brief": "Introduction\nStaking applications have become increasingly popular in the blockchain ecosystem, allowing users to earn rewards by locking up their cryptocurrency tokens in a smart contract. These applications have revolutionized the way users interac...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1713367830130/c51503ca-1d43-4e0c-9f0d-b887b9c53d09.png"
                },
                "url": "https://samthetutor.hashnode.dev/how-to-create-a-staking-dapp-on-the-icp-blockchain-using-react-and-motoko",
                "tags": [
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "Bitcoin"
                  }
                ],
                "publishedAt": "2024-04-16T10:36:00.161Z"
              }
            },
            {
              "node": {
                "title": "How to create a faucet Dapp for ckBTC testnet token using react and Motoko",
                "brief": "Introduction\nBuilding a token faucet dapp can be a great way to distribute tokens to users, promote your token, or provide tokens to developers for testing purposes. A token faucet dapp is a decentralized application that allows users to request a ce...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1700216969473/77ed8281-2b5c-4d0d-8afb-9f099232edd2.png"
                },
                "url": "https://samthetutor.hashnode.dev/how-to-create-a-faucet-dapp-for-ckbtc-testnet-token-using-react-and-motoko",
                "tags": [
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "React"
                  },
                  {
                    "name": "js"
                  },
                  {
                    "name": "Developer"
                  }
                ],
                "publishedAt": "2023-11-17T10:39:19.737Z"
              }
            },
            {
              "node": {
                "title": "How to Integrate the ICP Ledger and ICP Index Canisters in a React Frontend Project",
                "brief": "Introduction\nThe ICP ledger canister is a critical smart contract canister that holds accounts and transactions for the Internet Computer Protocol's (ICP) utility token. Meanwhile, the ICP index canister is used to retrieve transaction history from t...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1699715546302/5ff02a07-85c8-447e-a466-517ed8214732.png"
                },
                "url": "https://samthetutor.hashnode.dev/how-to-integrate-the-icp-ledger-and-icp-index-canisters-in-a-react-frontend-project",
                "tags": [
                  {
                    "name": "JavaScript"
                  },
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "React"
                  },
                  {
                    "name": "npm"
                  },
                  {
                    "name": "Web3"
                  }
                ],
                "publishedAt": "2023-11-12T13:36:26.795Z"
              }
            },
            {
              "node": {
                "title": "Build A Token Faucet Dapp on the Internet Computer with Motoko.",
                "brief": "Introduction\nA token faucet is a powerful tool that allows individuals and businesses to distribute small amounts of cryptocurrency or tokens to a large number of users. However, to ensure that the distribution is fair and efficient, it is important ...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1682455108095/5797cec9-59e5-4faa-9561-84f7d733e5a4.png"
                },
                "url": "https://samthetutor.hashnode.dev/build-a-token-faucet-dapp-on-the-internet-computer-with-motoko",
                "tags": [
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Developer"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Beginner Developers"
                  }
                ],
                "publishedAt": "2023-04-26T12:11:02.614Z"
              }
            },
            {
              "node": {
                "title": "Build A Whitelist Dapp on the Internet Computer using Motoko and Internet Identity",
                "brief": "Introduction\nA whitelist is a list of approved users or addresses that are granted access to a dapp or specific features within it.\nIn this tutorial, we will explore how to build a whitelist dapp on the Internet Computer. We will cover the basic conc...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1681988976226/5943901d-b912-4330-b85d-19fbb10ae4d2.png"
                },
                "url": "https://samthetutor.hashnode.dev/build-a-whitelist-dapp-on-the-internet-computer-using-motoko-and-internet-identity",
                "tags": [
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Developer"
                  },
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "Beginner Developers"
                  }
                ],
                "publishedAt": "2023-04-21T20:27:03.971Z"
              }
            },
            {
              "node": {
                "title": "Deploying Dapps on the Internet Computer with Chain IDE.",
                "brief": "Introduction\nLocal machines by default are not set up for developmental work. The user has to first set up a development environment to start developing apps. The user has to figure out and download configuration files that work for their machine.\nTh...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1680536168498/657a1f60-4ea1-47ba-921a-410e1e45d0a9.png"
                },
                "url": "https://samthetutor.hashnode.dev/deploying-dapps-on-the-internet-computer-with-chain-ide",
                "tags": [
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Ethereum"
                  },
                  {
                    "name": "Developer"
                  }
                ],
                "publishedAt": "2023-04-03T15:56:10.653Z"
              }
            },
            {
              "node": {
                "title": "Forking in Blockchains: Understanding soft and hard forks for successful upgrades",
                "brief": "Introduction\nThe decentralized nature of blockchains allows different participants(nodes) to validate and verify transactions on the network securely and transparently. This setting can however cause disagreements among participants on which rules to...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1680264258111/12a289f1-3c1d-4d63-9353-0686567fa89b.png"
                },
                "url": "https://samthetutor.hashnode.dev/forking-in-blockchains-understanding-soft-and-hard-forks-for-successful-upgrades",
                "tags": [
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Bitcoin"
                  },
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Developer"
                  }
                ],
                "publishedAt": "2023-03-30T23:59:10.055Z"
              }
            },
            {
              "node": {
                "title": "Understanding MEV in Blockchain Networks: A Beginner's Guide",
                "brief": "Introduction\nMEV or Maximum Extractable Value has gained a lot of traction in recent years in the world of blockchain. It presents an opportunity for entities involved in the network security ecosystem such as miners and validators to get extra value...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1680103408435/742f79f2-5fff-4301-8eea-b0e458ece0f4.png"
                },
                "url": "https://samthetutor.hashnode.dev/understanding-mev-in-blockchain-networks-a-beginners-guide",
                "tags": [
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Bitcoin"
                  },
                  {
                    "name": "#cybersecurity"
                  },
                  {
                    "name": "Cryptocurrency"
                  }
                ],
                "publishedAt": "2023-03-29T16:03:34.019Z"
              }
            },
            {
              "node": {
                "title": "Build a Vault Smart Contract Dapp on the Celo Blockchain",
                "brief": "Introduction\nHave you ever wondered how people in real life are able to buy shares from a company they are interested in? Well, in this tutorial, we are going to create a vault smart contract Dapp on the Celo blockchain that will enable users to buy ...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1679830154131/c2b26b04-b8e8-4fa9-910c-a87195f5a35b.png"
                },
                "url": "https://samthetutor.hashnode.dev/build-a-vault-smart-contract-dapp-on-the-celo-blockchain",
                "tags": [
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Beginner Developers"
                  },
                  {
                    "name": "Solidity"
                  },
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Developer"
                  }
                ],
                "publishedAt": "2023-03-23T11:32:52.000Z"
              }
            },
            {
              "node": {
                "title": "The life cycle of a Motoko program",
                "brief": "Introduction\nThe process of writing a program and getting it to compile and run correctly can be complex and require several stages. Writing a program involves developing a set of instructions or code that performs a specific task or set of tasks. On...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1679307525520/59291820-d70e-4327-9494-8954bb98e0c8.png"
                },
                "url": "https://samthetutor.hashnode.dev/the-life-cycle-of-a-motoko-program",
                "tags": [
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Developer"
                  },
                  {
                    "name": "Beginner Developers"
                  },
                  {
                    "name": "Tutorial"
                  }
                ],
                "publishedAt": "2023-03-20T10:51:59.556Z"
              }
            },
            {
              "node": {
                "title": "Commonly used dfx commands for beginners",
                "brief": "Using commands in the terminal to launch and manage your programs becomes a need when working in a development environment. The terminal offers a potent user interface for working with your project-related development tools and running various comman...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1678091405018/0d33f54f-8693-40e7-aa72-60620e6e0d05.png"
                },
                "url": "https://samthetutor.hashnode.dev/commonly-used-dfx-commands-for-beginners",
                "tags": [
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "cheatsheet"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Developer"
                  },
                  {
                    "name": "Beginner Developers"
                  }
                ],
                "publishedAt": "2023-03-06T08:53:09.906Z"
              }
            },
            {
              "node": {
                "title": "Solidity gas efficient technique during error handling.",
                "brief": "Introduction\nSolidity is a popular programming language used for developing smart contracts on the Ethereum blockchain. As with any programming language, errors can occur during the execution of Solidity code. However, when it comes to smart contract...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1677335242330/9a3b7ce7-9e61-4a11-a2a7-a0c50dcee692.webp"
                },
                "url": "https://samthetutor.hashnode.dev/solidity-gas-efficient-technique-during-error-handling",
                "tags": [
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "Solidity"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "remix ide"
                  },
                  {
                    "name": "Ethereum"
                  }
                ],
                "publishedAt": "2023-02-25T14:32:01.928Z"
              }
            },
            {
              "node": {
                "title": "Reentrancy attack",
                "brief": "Introduction\nThink of a day in your life when you wake up, go to your local bank and can withdraw any amount you want from that bank. What would you do with it? Go on a vacation, buy your dream car or donate it to charity?\nWell, it is possible to wit...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1676908654079/3637fade-80ff-4372-9d87-0e547d0cefc5.jpeg"
                },
                "url": "https://samthetutor.hashnode.dev/reentrancy-attack",
                "tags": [
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "Web3"
                  },
                  {
                    "name": "Blockchain"
                  },
                  {
                    "name": "Solidity"
                  }
                ],
                "publishedAt": "2023-02-21T22:54:54.906Z"
              }
            },
            {
              "node": {
                "title": "OPTICASH - Do this before the Pre-sale begins.",
                "brief": "What is Opticash?\nOpticash is an all-in-one platform that simplifies money remittance across the world using crypto and blockchain technology. You can trade, invest, chat and transfer fiat to crypto and vice versa very conveniently.\nThe platform offe...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1676798071218/8b873a05-acdb-49b9-be60-6d5a3339ad1b.png"
                },
                "url": "https://samthetutor.hashnode.dev/opticash-do-this-before-the-pre-sale-begins",
                "tags": [
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "airdrop"
                  }
                ],
                "publishedAt": "2023-02-19T11:30:12.279Z"
              }
            },
            {
              "node": {
                "title": "The Ultimate Beginner's Guide to Using Valora App Like a Pro",
                "brief": "Creating an account on an app is usually a straightforward process. In this tutorial, we will guide you step by step through the process of creating an account to send and receive crypto on the Valora app. Whether you are a new or experienced user, t...",
                "coverImage": {
                  "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1676162137258/f7b0f906-6ab1-40ee-bba3-caf4b56ec3dc.png"
                },
                "url": "https://samthetutor.hashnode.dev/the-ultimate-beginners-guide-to-using-valora-app-like-a-pro",
                "tags": [
                  {
                    "name": "Cryptocurrency"
                  },
                  {
                    "name": "crypto wallet"
                  },
                  {
                    "name": "beginner"
                  }
                ],
                "publishedAt": "2023-02-12T01:07:41.500Z"
              }
            }
          ]
        }
      }
    }
  
  