import Express from "express";
import bodyParser from "body-parser";
const app=Express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static("public"));
const data=[
    {
        heading:  `Five generations of high-temperature stars revealed in the largest Milky Way globular cluster Omega Centauri`,
        content: ` A strange class of high-temperature stars detected in the globular cluster Omega Centauri, the largest-known globular cluster in the Milky Way may provide clues to its formation.

        Globular clusters are spherical aggregates of several thousand to millions of stars bound by gravity. These systems are thought to have formed early on in the Universe and can serve as perfect astrophysical laboratories for astronomers to understand how stars evolve through various phases. Omega Cen, believed to be the remnant of a small galaxy gravitationally disrupted long ago by the Milky Way, currently hosts less massive stars than our Sun. After exhausting the hydrogen fuel in their core, these stars will eventually swell up to become red giants, having an inert helium core inside a shell fusing hydrogen. Later, they shed a lot of mass from their outer envelopes but extend their lives further by fusing helium in their cores to form carbon. At this stage, they are known as horizontal branch (HB) stars, with only a thin layer of material covering their super-hot cores. The range of mass lost at the red giant branch determines the thickness of the envelope of HB stars and hence their surface temperatures, which can be anywhere between 5000 K to more than 36,000 K. Studying these stars can help answer pressing questions in stellar astrophysics about the thickness of the envelope, the origin of mass loss in their red giant phase and so on.`
    },{
        heading:  `Global Emissions Could Peak Sooner Than You Think`,
        content: ` Every November, the Global Carbon Project publishes the year’s global CO2 emissions. It’s never good news. At a time when the world needs to be reducing emissions, the numbers continue to climb. However, while emissions have been moving in the wrong direction, many of the underpinning economic forces that drive them have been going the right way. This could well be the year when these various forces push hard enough to finally tip the balance.
        In 2022, the International Energy Agency (IEA) said it expected global energy emissions to hit their peak by 2025. This estimate marked a big change from the year before, sparked by accelerated investments in low-carbon technologies following the war in Ukraine. Rystad Energy—another research and analysis group—also expects a peak by 2025. Ember Climate—the leading source on global electricity data—estimates that emissions from global electricity already peaked in 2022. Analysts might disagree on the exact date, but it’s clear that a peak in emissions is now well within our grasp.`
    },{
        heading:  `Bimetallic antitumor agents can help manage platinum-resistant cancers`,
        content: `A newly found bimetallic highly potent antitumor agent that inhibits new blood vessel development (antiangiogenic) can help treat cancer cases that become resistant to platinum drugs commonly used for tackling the disease.  

        Platinum drugs are the frontline treatment option for many cancers. But their broad applicability is severely limited due to the fast development of resistance against these drugs. Several platinum-based anticancer drugs, including cisplatin, carboplatin, oxaliplatin, nedaplatin, and lobaplatin, are the frontline treatment options for various cancers. Unfortunately, the acquired or intrinsic resistance significantly limits the uses of platinum-based treatment.`
    },{
        heading:  `Repository of palaeoclimatic records of Himalayan tectonics & geomorphic evolution in Kashmir Valley and Ladakh region needs preservation`,
        content: ` Researchers investigating sedimentary landforms present in parts of the Kashmir Valley and Ladakh regions of the NW Trans-Himalaya have found them to be a repository of palaeoclimatic records of Himalayan tectonics and geomorphic evolution of the scenic landscape. Scientists have suggested that many of these areas need instant attention for conservation, preservation and should be declared as National geo-heritage sites.

        Despite the laws, globally, the conservation of vulnerable geosites has not received adequate attention. Geoscientists around the world are struggling to save many of the Geosites that are vulnerable to degradation, which fall in their study area.
        
        A research by Birbal Sahni Institute of Palaeosciences (BSIP), an autonomous institute of DST that studied the Quaternary (current and most recent of the three periods in the geologic time scale), sediments of Karewa Basin in Kashmir valley and deposits relating to sedimentation partly in lake and partly in stream waters of Ladakh Trans-Himalaya) has highlighted the importance, possible threats and well as the need for conservation and promotion of the Geoheritage sites.`
    },{
        heading:  `Organic solar cells developed on steel substrates can convert a steel roof into an energy-producing device`,
        content: ` An organic solar cells consisting of a combination of an organic polymer and PCBM (an organic semiconductor) developed on steel substrates can potentially convert a steel roof into an energy-producing device with greater efficiency than those currently available in the market.

        The potential of third-generation solar cell technologies lies in their integration with flexible and conformal surfaces. However, this integration requires developing new top transparent conducting electrodes as alternatives to indium tin oxide, an optoelectronic material currently in use and poses limitations because of its brittleness and as its optoelectronic efficiency varies with temperature. `
    },{
        heading:  `An innovative, green, novel antimicrobial air filtration technology can mitigate air-borne infection`,
        content: `A research team led by Prof Suryasarathi Bose and Prof Kaushik Chatterjee at the Indian Institute of Science, Bengaluru (IISc), Bangalore, developed germ-destroying air filters that can inactivate germs using ingredients like polyphenols and polycationic polymers commonly found in green tea. These ‘green’ ingredients rupture the microbes through site-specific binding.

        The research was supported by special grants from Science & Engineering Research Board (SERB) during the challenging COVID-19 pandemic and SERB-Technology Translation Awards (SERB-TETRA) funds and a patent has been filed on this
        
        Over continuous usage, the existing air filters become a breeding ground for captured germs. The growth of these germs clogs the pores of the filter, reducing the life of the filters. Resuspension of these germs can infect people in the vicinity.. The novel antimicrobial air filters were tested at the NABL Accredited Laboratory and were found to deactivate SARS-CoV-2 (delta variant) with an efficiency of 99.24%. This technology was transferred to AIRTH, a startup that is replacing the existing germ-growing air filters with germ-destroying air filters for commercialisation.`
    }
];
app.get("/",(req,res)=>{
    console.log(data);
    res.render("index.ejs",{info:data});
})

app.post("/view",(req,res)=>{
    res.render("pages/view.ejs",{info:JSON.parse(req.body.view)});
});

app.get("/post",(req,res)=>{
    res.render("pages/post.ejs");
});

app.post("/sumbit",(req,res)=>{
    const { heading, content } = req.body;

  // Validate data (example)
  if (!heading || !content) {
    return res.status(400).send('Please provide both heading and content');
  }
  data.push({ heading, content });
    res.redirect("/")
});

app.post("/delete",(req,res)=>{
    const obj =JSON.parse(req.body.id)
    // console.log(obj);
    // console.log(data);
    // console.log(obj.heading);
    const index = data.findIndex((item) => item.heading === obj.heading);
        // console.log(index);
    if (index > -1) { 
    data.splice(index, 1); 
    res.redirect("/");
}else{
    console.log("Element not found");
    res.redirect("/");
}
});
var obj;
app.post("/edit",(req,res)=>{
    obj = JSON.parse(req.body.view)
    res.render("pages/edit.ejs");
});

app.post("/edit/sumbit",(req,res)=>{
    // console.log(obj);
    // console.log(req.body);
    const index = data.findIndex((item) => item.heading === obj.heading);
    // console.log(data[index]);
    data[index].heading=req.body.heading;
    data[index].content=req.body.content;
    res.redirect("/");
});



app.listen(port,()=>{
    console.log(`Port ${port} is now listening..`);
})