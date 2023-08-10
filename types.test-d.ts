import retimer, { Retimer } from "./types"
import { expectType } from 'tsd'


expectType<Retimer>(retimer(() => {}, 1000))
expectType<Retimer>(retimer(() => {}, 1000, 42))

// use new Retimer()
expectType<Retimer>(new Retimer(() => {}, 1000))
expectType<Retimer>(new Retimer(() => {}, 1000, [42]))

