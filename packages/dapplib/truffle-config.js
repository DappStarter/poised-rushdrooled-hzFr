require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rice still home good nature swift submit'; 
let testAccounts = [
"0x63eda3c2ce1ff9f2cb3a054f28c5ede85ea284d935d0373e54769d9c078fa32d",
"0x9823ad84851d4944f670f07636527bf81a87cc74a07635b8f98d63b269cffb1b",
"0x7a86364283847f5cfc5cb4f24d356b64df855741d5fb1f18d2f3e686d2075c43",
"0x83da611e64cb64093b6a6a088311882e7dbb759e0a4524add46d986eb1d427eb",
"0xbbdfeb92c459e9eb2dd3c63e7a102eaf38758cf543ec0a24abc1bcea1dc21cd1",
"0x3e3447fcfdc4fc3910ae073ad89d7e4ee6a362fee7a1bbf38f6799a273986827",
"0x8c673481d3ba9cb2a36aee0d4b73f8665821fc09fac6dfc05f24ec95897801f2",
"0x1db1a78ef71753dedc0e5139e246e67fdd86e682625bbe676244aeeeae0ef72b",
"0x32679b1fe328cbad46fa833eba77628ba8261c92780e97a2525825db72ad19db",
"0x9329101accacc13264d28a92c258ce65c37de192bfc4540b13cbd862d399f91a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

