export const dutchBucketHydroponicsContent = {
  id: 'dutch-bucket-hydroponics',
  hero: {
    emoji: '💦',
    title: 'Dutch Bucket (Drip) Hydroponics',
    subtitle: 'One bucket per plant, fed by a drip line — the standard setup for tomatoes, peppers, and cucumbers, and how to build and run it.',
  },
  intro: 'A Dutch bucket system, also called a Bato bucket or drip system, gives each plant its own bucket of grow medium, with nutrient solution delivered by a drip line and any excess draining away through a fitting near the bottom. Keeping plants in separate buckets lets a large fruiting plant have plenty of root room and keeps a problem in one bucket from spreading to the rest. It is the go-to home and commercial method for big, long-season crops, and it needs more space, a pump, and a bit of plumbing than simpler systems. This guide covers how it works, how to build it, what to grow, how to feed it, and how to troubleshoot it. For comparing systems, see the site\'s Hydroponic System Chooser; for feeding numbers, see Hydroponic Nutrients, pH & EC.',
  sections: [
    {
      id: 'how-it-works',
      title: 'How a Dutch Bucket System Works',
      blocks: [
        {
          type: 'p',
          text: 'Each bucket is filled with an inert medium such as expanded clay pebbles or perlite. A drip emitter on a supply line delivers nutrient solution to the top of the medium several times a day, and the extra drains out of the bucket through a fitting near the bottom.',
        },
        {
          type: 'list',
          items: [
            'The drain fitting is usually an elbow or "S" shape that leaves a small pool of solution at the bottom of each bucket, so the roots always have a reserve of moisture even between drips.',
            'In a recirculating setup, the drain water runs through a common return line back to a central reservoir and is pumped around again. In a run-to-waste setup, the drain is discarded.',
            'A pump on a timer sends solution through the supply line, and drip emitters give each plant a steady, measured amount.',
            'Because plants sit in medium rather than bare water, the system is forgiving and supports heavy plants well.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪣',
          text: 'The small pool at the bottom of each bucket is the secret to the system\'s resilience. It keeps roots hydrated through a short pump interruption and gives fruiting plants a steady water supply.',
        },
        {
          type: 'image',
          src: '/guides/dutch-bucket-hydroponics/bucket-elbow-drain.jpg',
          alt: 'A white bucket with a black elbow drain fitting near the bottom filled with clay pebbles and a young tomato plant',
          caption: 'An elbow drain fitting leaves a small reserve of solution at the bottom of each bucket.',
        },
      ],
    },
    {
      id: 'building-the-system',
      title: 'Building the System',
      blocks: [
        {
          type: 'p',
          text: 'A small Dutch bucket setup for a few plants is mostly buckets, tubing, and a pump. Because each plant is large, plan the space first.',
        },
        {
          type: 'list',
          items: [
            'Buckets: typically around 3 to 5 gallons each, one per plant, with a drain fitting installed near the bottom.',
            'Grow medium: expanded clay pebbles or perlite to fill each bucket around the plant.',
            'A reservoir and a submersible pump, plus a timer on a GFCI-protected outlet.',
            'Supply tubing with a drip emitter (or two) at each bucket, and a return line that collects the drain from all the buckets and slopes back to the reservoir.',
            'Hydroponic nutrients, a pH test method, and an EC meter.',
          ],
        },
        {
          type: 'p',
          text: 'Set the buckets in a row over a return pipe or gutter with a slight slope, connect the supply line, and run the system with plain water first. Check that every emitter drips, every bucket drains, and the return line carries water back to the reservoir without pooling.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Test with plain water before planting. A blocked return line or a bucket that does not drain can flood an area or waterlog roots. Also keep the whole setup on a waterproof surface and plug the pump into a GFCI outlet.',
        },
        {
          type: 'image',
          src: '/guides/dutch-bucket-hydroponics/return-line-buckets.jpg',
          alt: 'A row of white buckets connected by a black return pipe running along the floor in a greenhouse',
          caption: 'A shared return line carries drain water from every bucket back to the reservoir.',
        },
      ],
    },
    {
      id: 'best-crops',
      title: 'What to Grow',
      blocks: [
        {
          type: 'p',
          text: 'Dutch buckets are built for big, productive plants. They are poor value for leafy greens and herbs, which grow more simply in other systems.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Fit', 'Notes'],
          rows: [
            ['Tomatoes', 'Excellent', 'Needs a strong trellis or string support and high light; feed calcium and magnesium carefully'],
            ['Peppers (bell and hot)', 'Excellent', 'Needs strong light and warm conditions; support branches as fruit develops'],
            ['Cucumbers', 'Excellent', 'Grow up a vertical trellis; compact or mini varieties suit indoor growing'],
            ['Eggplant', 'Very good', 'Warm and bright; support branches'],
            ['Strawberries', 'Fair', 'Possible, but towers and NFT use space better'],
            ['Lettuce and herbs', 'Poor', 'A bucket per plant is wasteful; use NFT, DWC, or Kratky instead'],
          ],
        },
        {
          type: 'tip',
          emoji: '🥒',
          text: 'Tall vining crops need a plan for support from the start — a trellis, strings running to overhead wires, or tall stakes. Install support when you plant so you do not damage roots later.',
        },
        {
          type: 'image',
          src: '/guides/dutch-bucket-hydroponics/cucumbers-on-trellis.jpg',
          alt: 'Cucumber vines climbing a vertical trellis above white buckets with cucumbers hanging',
          caption: 'Vining crops like cucumbers climb a trellis above their buckets.',
        },
      ],
    },
    {
      id: 'feeding',
      title: 'Feeding and Watering',
      blocks: [
        {
          type: 'p',
          text: 'Because the plants are large and the medium is coarse, the drip schedule and the solution strength both matter. Fruiting crops are heavy feeders once they flower.',
        },
        {
          type: 'list',
          items: [
            'Feed several short drips through the day rather than one long one; the medium should be damp, not saturated, and excess should drain freely.',
            'Fruiting plants typically use a stronger solution than greens — roughly EC 1.8 to 3.0 once established, ramping up gradually, as covered in Hydroponic Nutrients, pH & EC.',
            'Keep pH in the range for the crop, about 5.8 to 6.3 for tomatoes and hot peppers and 6.0 to 6.5 for bell peppers.',
            'In a recirculating system, check the reservoir\'s strength and pH regularly and replace the solution on a schedule.',
            'Flush the buckets with plain, pH-adjusted water every few weeks to prevent salt buildup in the medium.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'Watch the water temperature as well as the numbers. A reservoir in a hot greenhouse can climb into the range where roots suffer, so shade it or insulate it.',
        },
        {
          type: 'image',
          src: '/guides/dutch-bucket-hydroponics/drip-emitter.jpg',
          alt: 'A black drip emitter on thin tubing dripping nutrient solution onto clay pebbles at the base of a plant',
          caption: 'A drip emitter delivers solution to the top of the medium several times a day.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Dutch Buckets',
      blocks: [
        {
          type: 'p',
          text: 'Most problems in a drip system trace back to blocked emitters, drainage, or the reservoir. Walk the line from the pump out to the buckets when something seems off.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Fix'],
          rows: [
            ['One plant is dry or wilting while others are fine', 'Clogged or dislodged drip emitter', 'Clear or replace the emitter; check the tubing for kinks'],
            ['White or orange crust on emitters', 'Mineral deposits from nutrients or hard water', 'Soak or replace emitters; consider filtering hard water'],
            ['Bucket not draining', 'Blocked drain fitting or roots in the elbow', 'Clear the drain; keep the fitting free of packed medium'],
            ['Water pooling around buckets', 'Blocked or unsloped return line', 'Clear the line and restore a steady slope to the reservoir'],
            ['Brown, crispy leaf tips', 'Solution too strong or salt buildup', 'Measure strength, dilute, and flush the medium with plain water'],
            ['Blossom end rot on fruit', 'Uneven watering or calcium uptake problems', 'Keep watering consistent and check calcium and magnesium in the feed'],
            ['Everything wilts at once', 'Pump, timer, or power failure', 'Check the pump and timer immediately; keep a spare pump'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔧',
          text: 'Walk the system daily: every emitter should be dripping, every bucket draining, and the reservoir level steady. That two-minute check catches most problems before the plants show them.',
        },
        {
          type: 'image',
          src: '/guides/dutch-bucket-hydroponics/bell-pepper-in-bucket.jpg',
          alt: 'A healthy bell pepper plant with green and red peppers growing in a white bucket of clay pebbles',
          caption: 'One plant per bucket lets big fruiting plants have room and keeps problems contained.',
        },
      ],
    },
  ],
}
