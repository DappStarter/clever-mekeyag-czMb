require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet repeat noble hole just arctic slot general'; 
let testAccounts = [
"0xbeb471369f943953c18532da1f6f6ea519f5b93c3c4c79bfcc146ff1dfdf3a89",
"0x7da8cb543e878051551982ab042460ec955293582440a42e6f2e13b1f257a7b9",
"0x3252aaab74cfc020aaf2977016e72d445539d9ab698d34fc7782c4bbf97833ab",
"0xa01869cd437cba1bec4ffc36b5a24b2c16be4b906fa8353504e801f0a0e3b428",
"0x40ec837bede41702f6fbe3f93d7234654f4ba4c21ca7ae9955d991d61972ab3e",
"0xb2d37e9882c9b4a9898daf5dae6727672a1dc09263ad567d85e61220f492d96e",
"0x4eb036e2dc0198c4c20f173f1badb3d326de830cdedb6187a78c5923689e2791",
"0x430b41577f30526b5ca2650da49461ddc014277579f1d249fc006ca813503042",
"0x4819edb428a9d042323237a002ea0f0132dc17336d1b1a94142ec373e4d89a3f",
"0x01b9fe11013cfac7b6f385111ca0a7dd7225571754951600a511d55c4628e80c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

