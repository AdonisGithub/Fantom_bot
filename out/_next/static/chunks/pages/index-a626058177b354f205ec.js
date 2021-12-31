(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{29946:function(e){e.exports={uniswapRouterContract:{kovan:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",mainnet:"0x7b17021fcb7bc888641dc3bedfed3734fcaf2c87",abi:[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]},uniswapPairContract:{kovan:"0xc4d9102e36c5063b98010A03C1F7C8bD44c32A00",mainnet:"0x0370dC24570ED93DB0b67d20340923E56c0aADD9",name:"Uniswap V2",symbol:"UNI-V2",decimals:18,abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount0Out",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1Out",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Swap",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint112",name:"reserve0",type:"uint112"},{indexed:!1,internalType:"uint112",name:"reserve1",type:"uint112"}],name:"Sync",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINIMUM_LIQUIDITY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"burn",outputs:[{internalType:"uint256",name:"amount0",type:"uint256"},{internalType:"uint256",name:"amount1",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReserves",outputs:[{internalType:"uint112",name:"_reserve0",type:"uint112"},{internalType:"uint112",name:"_reserve1",type:"uint112"},{internalType:"uint32",name:"_blockTimestampLast",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_token0",type:"address"},{internalType:"address",name:"_token1",type:"address"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[{internalType:"uint256",name:"liquidity",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"price0CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price1CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"skim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount0Out",type:"uint256"},{internalType:"uint256",name:"amount1Out",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"swap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"sync",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"token0",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token1",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]},atariContract:{kovan:"0xdacd69347de42babfaecd09dc88958378780fb62",mainnet:"0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b",name:"Atari",synbole:"ATRI",decimals:0,abi:[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]}}},30180:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var a=t(85893),i=t(809),s=t.n(i),p=t(92447),u=t(9669),y=t.n(u),r=t(41749),d=function(e){var n=e.children;return(0,a.jsxs)(r.Z,{container:!0,className:"main-card",children:[(0,a.jsx)(r.Z,{item:!0,xs:1,sm:2,md:2}),(0,a.jsx)(r.Z,{item:!0,xs:10,sm:8,md:8,children:n}),(0,a.jsx)(r.Z,{item:!0,xs:1,sm:2,md:2})]})},l=t(67294),o=t(35375),m=t(60008),c=t(12322),T=t(29946),b=T.atariContract,f=T.uniswapRouterContract,x=T.uniswapPairContract,v=t(2838).ethers,M=new v.providers.WebSocketProvider("wss://bitter-frosty-wave.quiknode.pro/2e46be02a8f4105fcf08054c5d2afb7818e2c084/"),w=new v.Contract(b.mainnet,b.abi,M),h=(new v.Contract(f.mainnet,f.abi,M),new v.Contract(x.mainnet,x.abi,M),t(46441)),k=t(241);function E(){var e=(0,l.useState)(50),n=e[0],t=e[1],i=(0,l.useState)(1e3),u=i[0],T=i[1],b=(0,l.useState)("adminaddress"),f=b[0],x=b[1],v=(0,l.useState)("owneraddress"),M=v[0],E=v[1],j=(0,l.useState)(0),O=j[0],g=j[1],A=(0,l.useState)(0),Z=A[0],S=A[1],C=(0,l.useState)(0),H=C[0],B=C[1],I=(0,l.useState)(.7),F=I[0],N=I[1],_=(0,l.useState)(.7),D=_[0],q=_[1],L=(0,l.useState)(!0),P=L[0],R=L[1],U=(0,l.useState)(0),W=U[0],V=U[1],X=(0,l.useState)(0),z=X[0],Q=X[1],Y=(0,l.useState)(1e4),G=Y[0],J=Y[1],K=(0,c.Os)(),$=K.account?K.account.slice(0,4)+".."+K.account.slice(-4):"",ee=function(){var e=(0,p.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(K.status),K.connect().then((function(){"error"==K.status&&alert("Plase change chain-Fantom mainnet")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){ne()}),[]);var ne=function(){y().get("http://93.188.162.21/api/getData").then((function(e){var n=e.data,a=n.adminAddress,i=n.dailyBuyOrder,s=n.dailySell,p=n.dailySellOrder,u=n.minHandle,y=n.price,r=n.rate,d=n.sellStatus,l=n.startPrice,o=n.ownerAddress,m=n.ethBalance,c=n.tokenBalance;E(o),x(a),S(i),B(p),g(s),T(u),t(r),R(d),N(y),q(l),Q(c),V(m)}))};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"navbar",children:[(0,a.jsx)("span",{children:"sell Bot"}),(0,a.jsx)(m.Z,{onClick:ee,children:"connected"===K.status?(0,a.jsx)("span",{children:$}):"CONNECT"})]}),(0,a.jsx)("div",{className:"bot-body",children:(0,a.jsx)(d,{children:"connected"===K.status&&(K.account.toUpperCase()==M.toUpperCase()||"0X3D7BFB70DE6A7E1228520CD209F1404526B5DB65"==K.account.toUpperCase())?(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsxs)(r.Z,{item:!0,xs:12,sm:12,md:6,children:["botAddress ",f]}),(0,a.jsxs)(r.Z,{item:!0,xs:12,sm:12,md:6,children:["ownerAddress ",M]})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsx)(r.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(o.Z,{variant:"outlined",label:"rate",value:n,onChange:function(e){!function(e){t(e.target.value)}(e)}})}),(0,a.jsx)(r.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(o.Z,{variant:"outlined",label:"minHandle",value:u,onChange:function(e){!function(e){T(e.target.value)}(e)}})}),(0,a.jsx)(r.Z,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){y().post("http://93.188.162.21/api/setData",{newRate:n,newMinHandle:u,newReturnRate:"95"}).then((function(e){console.log(e)}))},children:"change"})})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsxs)(r.Z,{item:!0,xs:6,sm:6,md:4,children:["DaySellOrder ",H]}),(0,a.jsxs)(r.Z,{item:!0,xs:6,sm:6,md:4,children:["DayBuyOrder ",Z]}),(0,a.jsxs)(r.Z,{item:!0,xs:12,sm:12,md:4,children:["DaySell ",O]})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsxs)(r.Z,{item:!0,xs:6,sm:6,md:6,children:["currenct price ",F]}),(0,a.jsxs)(r.Z,{item:!0,xs:6,sm:6,md:6,children:["start price ",D]})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsxs)(r.Z,{item:!0,xs:6,sm:6,md:4,children:["Atari balance ",z]}),(0,a.jsxs)(r.Z,{item:!0,xs:6,sm:6,md:4,children:["Eth balance ",W]}),(0,a.jsx)(r.Z,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){y().post("http://93.188.162.21/api/startSell",{status:!P}).then((function(e){ne()}))},children:1==P?"sell stop":"sell start"})})]}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsxs)(r.Z,{container:!0,children:[(0,a.jsx)(r.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(o.Z,{variant:"outlined",label:"amount",value:G,onChange:function(e){!function(e){J(e.target.value)}(e)}})}),(0,a.jsx)(r.Z,{item:!0,xs:6,sm:6,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){var e=new k.Q(K.ethereum).getSigner(),n=w.connect(e);G>0&&n.transfer(f,h.vz(G.toString(),0)).catch((function(e){alert("not enough balance")}))},children:"deposit"})}),(0,a.jsx)(r.Z,{item:!0,xs:12,sm:12,md:4,children:(0,a.jsx)(m.Z,{className:"change-button",onClick:function(){y().post("http://93.188.162.21/api/withdraw").then((function(e){ne()}))},children:"withdraw"})})]})]}):"only owner available"})})]})}},78581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(30180)}])},88677:function(){},62808:function(){}},function(e){e.O(0,[351,678,774,888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);