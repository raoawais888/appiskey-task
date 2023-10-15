 module.exports   ={
    preset: "jest-expo",
    transform: {
        '^.+\\.js$': 'babel-jest',
      },
        
  testMatch:[
        
    '<rootDir>/src/*.test.jsx'

   ]

  
  };