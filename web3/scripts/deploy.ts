import { ethers } from 'hardhat';
import console from 'console';

const _metadataUri = 'https://gateway.pinata.cloud/ipfs/https://gateway.pinata.cloud/ipfs/QmX2ubhtBPtYw75Wrpv6HLb1fhbJqxrnbhDo1RViW3oVoi';

async function deploy(name: string, ...params: [string]) {
  const contractFactory = await ethers.getContractFactory(name);

  return await contractFactory.deploy(...params).then((f: { deployed: () => any; }) => f.deployed());
}

async function main() {
  const [admin] = await ethers.getSigners();

  console.log(await admin.getAddress)
  
  console.log(`Deploying a smart contract...`);

  const BitWars = await ethers.getContractFactory("BitWars")



  const tx = await BitWars.deploy(_metadataUri)


  // const BitWars = (await deploy('BitWars', _metadataUri));

  console.log({ BitWars: tx.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
