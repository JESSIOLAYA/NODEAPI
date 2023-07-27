const {Router} = requiere ('express');
const router = Router();
requirr ()

const movies = require ('../datos.json')

router.get('/',(req,res ) => {
    res.json('movies');

});

router.put('./:id',(req,res) => {
    const {id} = req.params;
    const{title,director,year}=req.body;
    if (title&& director ){
        _.each(movies,(movie,i)=> {

            if (movie.id = id ){
              movies.title = title;
            }
        });
      res.json(movies);
    }
});

router.delete('./:id',(req,res) => {
    const {id} = req.params; 
    _.each(movies,(movie,i)=> {

      if (movie.id = id ){
        movies.splice(i,1);
      }
});

router.post('/',(req,res ) => {
    const {title,director,year} = req.body;
    if (title&& director)
    {   const id=movies.length + 1;
         const newmovie = {...req.body,id}
        movies.push(newmovie)
         res.json('guardado')

    }else {
    res.status(500).json({error:'there was an error.'});
    }
});

router.delete('/id',(req,res)=> {
}
module.exports = router;
