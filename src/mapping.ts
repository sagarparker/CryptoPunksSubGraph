import {
    Assign as AssignEvent,
    PunkTransfer as PunkTransferEvent,
    PunkBought as PunkBoughtEvent,
  } from "../generated/CryptoPunks/CryptoPunks";
  import {
    Assign,
    PunkTransfer,
    PunkBought,
    User,
    Punk,
  } from "../generated/schema";
  
  export function handleAssign(event: AssignEvent): void {
    const userAddr = event.params.to.toHexString();
    const timeStamp = event.block.timestamp;
    const punkId = event.params.punkIndex.toString();
    let user = User.load(userAddr);
    if (!user) {
      user = new User(userAddr);
      user.save();
    }
  
    let assign = Assign.load(punkId);
    if (!assign) {
      assign = new Assign(punkId);
      assign.punk = punkId;
      assign.user = userAddr;
      assign.timeStamp = timeStamp;
      assign.save();
    }
  
    let punk = Punk.load(punkId);
    if (!punk) {
      punk = new Punk(punkId);
      punk.birthTime = timeStamp;
      punk.dad = userAddr;
      punk.owner = userAddr;
      punk.save();
    }
  }
  
  export function handlePunkTransfer(event: PunkTransferEvent): void {
    const to = event.params.to.toHexString();
    const from = event.params.from.toHexString();
    const punkId = event.params.punkIndex.toString();
    const hash = event.transaction.hash.toHexString();
    let punk: Punk | null = Punk.load(punkId);
  
    if (punk) {
      punk.owner = to;
      punk.save();
    }
    let user = User.load(to);
    if (!user) {
      user = new User(to);
      user.save();
    }
  
    let punkTransfer = new PunkTransfer(hash);
    punkTransfer.from = from;
    punkTransfer.to = to;
    punkTransfer.punk = punkId;
    punkTransfer.save();
  }
  
  export function handlePunkBought(event: PunkBoughtEvent): void {
    const to = event.params.toAddress.toHexString();
    const from = event.params.fromAddress.toHexString();
    const punkId = event.params.punkIndex.toString();
    const amount = event.params.value;
    const hash = event.transaction.hash.toHexString();
    const timeStamp = event.block.timestamp;
  
    let punkBought = new PunkBought(hash);
    punkBought.seller = from;
    punkBought.buyer = to;
    punkBought.punk = punkId;
    punkBought.amount = amount;
    punkBought.timeStamp = timeStamp;
    punkBought.save();
  
    let punk: Punk | null = Punk.load(punkId);
    if (punk) {
      punk.owner = to;
      punk.save();
    }
    let user = User.load(to);
    if (!user) {
      user = new User(to);
      user.save();
    }
  }