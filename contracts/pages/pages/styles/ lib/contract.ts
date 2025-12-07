import { ethers } from "ethers";

const RPC = process.env.NEXT_PUBLIC_MONAD_RPC || "https://rpc.monad.xyz";
const CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

export function getProvider() {
  return new ethers.JsonRpcProvider(RPC);
}

export function getContract(abi: any){
  return new ethers.Contract(CONTRACT, abi, getProvider());
}
