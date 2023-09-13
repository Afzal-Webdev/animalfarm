import express from 'express';
import cors from 'cors';
import Chance from 'chance';

const app = express();
app.use(cors());
app.use(express.json());

// Fake Data

const chance = new Chance();

const animals = [...Array(250).keys()].map(id=>{
    return{
        id,
        type: chance.animal(),
        age:chance.age(),
        name:chance.name(),
    }
})

// Endpoint
app.get('',(req,res)=>{
    const q = req.query.q?.toLocaleLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLocaleLowerCase().includes(q));
    res.send(results)
})

app.listen(8080,()=>console.log('Listening on Port http://localhost:8080'));