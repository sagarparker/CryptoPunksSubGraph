// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Assign extends ethereum.Event {
  get params(): Assign__Params {
    return new Assign__Params(this);
  }
}

export class Assign__Params {
  _event: Assign;

  constructor(event: Assign) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get punkIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PunkTransfer extends ethereum.Event {
  get params(): PunkTransfer__Params {
    return new PunkTransfer__Params(this);
  }
}

export class PunkTransfer__Params {
  _event: PunkTransfer;

  constructor(event: PunkTransfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get punkIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PunkOffered extends ethereum.Event {
  get params(): PunkOffered__Params {
    return new PunkOffered__Params(this);
  }
}

export class PunkOffered__Params {
  _event: PunkOffered;

  constructor(event: PunkOffered) {
    this._event = event;
  }

  get punkIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get minValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get toAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PunkBidEntered extends ethereum.Event {
  get params(): PunkBidEntered__Params {
    return new PunkBidEntered__Params(this);
  }
}

export class PunkBidEntered__Params {
  _event: PunkBidEntered;

  constructor(event: PunkBidEntered) {
    this._event = event;
  }

  get punkIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PunkBidWithdrawn extends ethereum.Event {
  get params(): PunkBidWithdrawn__Params {
    return new PunkBidWithdrawn__Params(this);
  }
}

export class PunkBidWithdrawn__Params {
  _event: PunkBidWithdrawn;

  constructor(event: PunkBidWithdrawn) {
    this._event = event;
  }

  get punkIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class PunkBought extends ethereum.Event {
  get params(): PunkBought__Params {
    return new PunkBought__Params(this);
  }
}

export class PunkBought__Params {
  _event: PunkBought;

  constructor(event: PunkBought) {
    this._event = event;
  }

  get punkIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get fromAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get toAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class PunkNoLongerForSale extends ethereum.Event {
  get params(): PunkNoLongerForSale__Params {
    return new PunkNoLongerForSale__Params(this);
  }
}

export class PunkNoLongerForSale__Params {
  _event: PunkNoLongerForSale;

  constructor(event: PunkNoLongerForSale) {
    this._event = event;
  }

  get punkIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Contract__punksOfferedForSaleResult {
  value0: boolean;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  getIsForSale(): boolean {
    return this.value0;
  }

  getPunkIndex(): BigInt {
    return this.value1;
  }

  getSeller(): Address {
    return this.value2;
  }

  getMinValue(): BigInt {
    return this.value3;
  }

  getOnlySellTo(): Address {
    return this.value4;
  }
}

export class Contract__punkBidsResult {
  value0: boolean;
  value1: BigInt;
  value2: Address;
  value3: BigInt;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: Address,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getHasBid(): boolean {
    return this.value0;
  }

  getPunkIndex(): BigInt {
    return this.value1;
  }

  getBidder(): Address {
    return this.value2;
  }

  getValue(): BigInt {
    return this.value3;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  punksOfferedForSale(param0: BigInt): Contract__punksOfferedForSaleResult {
    let result = super.call(
      "punksOfferedForSale",
      "punksOfferedForSale(uint256):(bool,uint256,address,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__punksOfferedForSaleResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toAddress()
    );
  }

  try_punksOfferedForSale(
    param0: BigInt
  ): ethereum.CallResult<Contract__punksOfferedForSaleResult> {
    let result = super.tryCall(
      "punksOfferedForSale",
      "punksOfferedForSale(uint256):(bool,uint256,address,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__punksOfferedForSaleResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toAddress()
      )
    );
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  imageHash(): string {
    let result = super.call("imageHash", "imageHash():(string)", []);

    return result[0].toString();
  }

  try_imageHash(): ethereum.CallResult<string> {
    let result = super.tryCall("imageHash", "imageHash():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nextPunkIndexToAssign(): BigInt {
    let result = super.call(
      "nextPunkIndexToAssign",
      "nextPunkIndexToAssign():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_nextPunkIndexToAssign(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextPunkIndexToAssign",
      "nextPunkIndexToAssign():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  punkIndexToAddress(param0: BigInt): Address {
    let result = super.call(
      "punkIndexToAddress",
      "punkIndexToAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_punkIndexToAddress(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "punkIndexToAddress",
      "punkIndexToAddress(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  standard(): string {
    let result = super.call("standard", "standard():(string)", []);

    return result[0].toString();
  }

  try_standard(): ethereum.CallResult<string> {
    let result = super.tryCall("standard", "standard():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  punkBids(param0: BigInt): Contract__punkBidsResult {
    let result = super.call(
      "punkBids",
      "punkBids(uint256):(bool,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__punkBidsResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt()
    );
  }

  try_punkBids(param0: BigInt): ethereum.CallResult<Contract__punkBidsResult> {
    let result = super.tryCall(
      "punkBids",
      "punkBids(uint256):(bool,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__punkBidsResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt()
      )
    );
  }

  balanceOf(param0: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allPunksAssigned(): boolean {
    let result = super.call(
      "allPunksAssigned",
      "allPunksAssigned():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_allPunksAssigned(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allPunksAssigned",
      "allPunksAssigned():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  punksRemainingToAssign(): BigInt {
    let result = super.call(
      "punksRemainingToAssign",
      "punksRemainingToAssign():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_punksRemainingToAssign(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "punksRemainingToAssign",
      "punksRemainingToAssign():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingWithdrawals(param0: Address): BigInt {
    let result = super.call(
      "pendingWithdrawals",
      "pendingWithdrawals(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_pendingWithdrawals(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingWithdrawals",
      "pendingWithdrawals(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class EnterBidForPunkCall extends ethereum.Call {
  get inputs(): EnterBidForPunkCall__Inputs {
    return new EnterBidForPunkCall__Inputs(this);
  }

  get outputs(): EnterBidForPunkCall__Outputs {
    return new EnterBidForPunkCall__Outputs(this);
  }
}

export class EnterBidForPunkCall__Inputs {
  _call: EnterBidForPunkCall;

  constructor(call: EnterBidForPunkCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EnterBidForPunkCall__Outputs {
  _call: EnterBidForPunkCall;

  constructor(call: EnterBidForPunkCall) {
    this._call = call;
  }
}

export class AcceptBidForPunkCall extends ethereum.Call {
  get inputs(): AcceptBidForPunkCall__Inputs {
    return new AcceptBidForPunkCall__Inputs(this);
  }

  get outputs(): AcceptBidForPunkCall__Outputs {
    return new AcceptBidForPunkCall__Outputs(this);
  }
}

export class AcceptBidForPunkCall__Inputs {
  _call: AcceptBidForPunkCall;

  constructor(call: AcceptBidForPunkCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AcceptBidForPunkCall__Outputs {
  _call: AcceptBidForPunkCall;

  constructor(call: AcceptBidForPunkCall) {
    this._call = call;
  }
}

export class SetInitialOwnersCall extends ethereum.Call {
  get inputs(): SetInitialOwnersCall__Inputs {
    return new SetInitialOwnersCall__Inputs(this);
  }

  get outputs(): SetInitialOwnersCall__Outputs {
    return new SetInitialOwnersCall__Outputs(this);
  }
}

export class SetInitialOwnersCall__Inputs {
  _call: SetInitialOwnersCall;

  constructor(call: SetInitialOwnersCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get indices(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SetInitialOwnersCall__Outputs {
  _call: SetInitialOwnersCall;

  constructor(call: SetInitialOwnersCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class AllInitialOwnersAssignedCall extends ethereum.Call {
  get inputs(): AllInitialOwnersAssignedCall__Inputs {
    return new AllInitialOwnersAssignedCall__Inputs(this);
  }

  get outputs(): AllInitialOwnersAssignedCall__Outputs {
    return new AllInitialOwnersAssignedCall__Outputs(this);
  }
}

export class AllInitialOwnersAssignedCall__Inputs {
  _call: AllInitialOwnersAssignedCall;

  constructor(call: AllInitialOwnersAssignedCall) {
    this._call = call;
  }
}

export class AllInitialOwnersAssignedCall__Outputs {
  _call: AllInitialOwnersAssignedCall;

  constructor(call: AllInitialOwnersAssignedCall) {
    this._call = call;
  }
}

export class BuyPunkCall extends ethereum.Call {
  get inputs(): BuyPunkCall__Inputs {
    return new BuyPunkCall__Inputs(this);
  }

  get outputs(): BuyPunkCall__Outputs {
    return new BuyPunkCall__Outputs(this);
  }
}

export class BuyPunkCall__Inputs {
  _call: BuyPunkCall;

  constructor(call: BuyPunkCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyPunkCall__Outputs {
  _call: BuyPunkCall;

  constructor(call: BuyPunkCall) {
    this._call = call;
  }
}

export class TransferPunkCall extends ethereum.Call {
  get inputs(): TransferPunkCall__Inputs {
    return new TransferPunkCall__Inputs(this);
  }

  get outputs(): TransferPunkCall__Outputs {
    return new TransferPunkCall__Outputs(this);
  }
}

export class TransferPunkCall__Inputs {
  _call: TransferPunkCall;

  constructor(call: TransferPunkCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferPunkCall__Outputs {
  _call: TransferPunkCall;

  constructor(call: TransferPunkCall) {
    this._call = call;
  }
}

export class WithdrawBidForPunkCall extends ethereum.Call {
  get inputs(): WithdrawBidForPunkCall__Inputs {
    return new WithdrawBidForPunkCall__Inputs(this);
  }

  get outputs(): WithdrawBidForPunkCall__Outputs {
    return new WithdrawBidForPunkCall__Outputs(this);
  }
}

export class WithdrawBidForPunkCall__Inputs {
  _call: WithdrawBidForPunkCall;

  constructor(call: WithdrawBidForPunkCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawBidForPunkCall__Outputs {
  _call: WithdrawBidForPunkCall;

  constructor(call: WithdrawBidForPunkCall) {
    this._call = call;
  }
}

export class SetInitialOwnerCall extends ethereum.Call {
  get inputs(): SetInitialOwnerCall__Inputs {
    return new SetInitialOwnerCall__Inputs(this);
  }

  get outputs(): SetInitialOwnerCall__Outputs {
    return new SetInitialOwnerCall__Outputs(this);
  }
}

export class SetInitialOwnerCall__Inputs {
  _call: SetInitialOwnerCall;

  constructor(call: SetInitialOwnerCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetInitialOwnerCall__Outputs {
  _call: SetInitialOwnerCall;

  constructor(call: SetInitialOwnerCall) {
    this._call = call;
  }
}

export class OfferPunkForSaleToAddressCall extends ethereum.Call {
  get inputs(): OfferPunkForSaleToAddressCall__Inputs {
    return new OfferPunkForSaleToAddressCall__Inputs(this);
  }

  get outputs(): OfferPunkForSaleToAddressCall__Outputs {
    return new OfferPunkForSaleToAddressCall__Outputs(this);
  }
}

export class OfferPunkForSaleToAddressCall__Inputs {
  _call: OfferPunkForSaleToAddressCall;

  constructor(call: OfferPunkForSaleToAddressCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minSalePriceInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get toAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class OfferPunkForSaleToAddressCall__Outputs {
  _call: OfferPunkForSaleToAddressCall;

  constructor(call: OfferPunkForSaleToAddressCall) {
    this._call = call;
  }
}

export class OfferPunkForSaleCall extends ethereum.Call {
  get inputs(): OfferPunkForSaleCall__Inputs {
    return new OfferPunkForSaleCall__Inputs(this);
  }

  get outputs(): OfferPunkForSaleCall__Outputs {
    return new OfferPunkForSaleCall__Outputs(this);
  }
}

export class OfferPunkForSaleCall__Inputs {
  _call: OfferPunkForSaleCall;

  constructor(call: OfferPunkForSaleCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minSalePriceInWei(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class OfferPunkForSaleCall__Outputs {
  _call: OfferPunkForSaleCall;

  constructor(call: OfferPunkForSaleCall) {
    this._call = call;
  }
}

export class GetPunkCall extends ethereum.Call {
  get inputs(): GetPunkCall__Inputs {
    return new GetPunkCall__Inputs(this);
  }

  get outputs(): GetPunkCall__Outputs {
    return new GetPunkCall__Outputs(this);
  }
}

export class GetPunkCall__Inputs {
  _call: GetPunkCall;

  constructor(call: GetPunkCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetPunkCall__Outputs {
  _call: GetPunkCall;

  constructor(call: GetPunkCall) {
    this._call = call;
  }
}

export class PunkNoLongerForSaleCall extends ethereum.Call {
  get inputs(): PunkNoLongerForSaleCall__Inputs {
    return new PunkNoLongerForSaleCall__Inputs(this);
  }

  get outputs(): PunkNoLongerForSaleCall__Outputs {
    return new PunkNoLongerForSaleCall__Outputs(this);
  }
}

export class PunkNoLongerForSaleCall__Inputs {
  _call: PunkNoLongerForSaleCall;

  constructor(call: PunkNoLongerForSaleCall) {
    this._call = call;
  }

  get punkIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PunkNoLongerForSaleCall__Outputs {
  _call: PunkNoLongerForSaleCall;

  constructor(call: PunkNoLongerForSaleCall) {
    this._call = call;
  }
}
