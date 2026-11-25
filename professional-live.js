(()=>{
 const support=document.querySelector('#practice');
 if(!support||document.querySelector('.practice-bridge'))return;

 const section=document.createElement('section');
 section.className='practice-bridge';
 section.innerHTML=`
  <div class="section-head">
   <p class="eyebrow">02 / Across the work</p>
   <p class="muted">A decision framework</p>
  </div>
  <div class="bridge-intro">
   <h2>What travels from<br><em>one show to the next.</em></h2>
   <p>Qingzhou and Montreux differed in scale, audience and organisational setting. Across both, the work came back to the same task: keeping artistic intent and operational reality in the same conversation.</p>
  </div>
  <div class="bridge-logic">
   <article>
    <span>01</span>
    <p class="label">Fit</p>
    <h3>Who belongs in this room?</h3>
    <p>Read the relationship between artist identity, audience expectations, programme context and venue conditions before committing to a format.</p>
   </article>
   <article>
    <span>02</span>
    <p class="label">Viability</p>
    <h3>Can the idea hold together?</h3>
    <p>Test creative choices against schedules, technical needs, staffing, partner interests, cost and risk. A strong concept still has to survive contact with the operating plan.</p>
   </article>
   <article>
    <span>03</span>
    <p class="label">Continuity</p>
    <h3>What remains after the show?</h3>
    <p>Clear handovers and reliable artist support build trust. Documentation and review turn one successful performance into a stronger basis for the next collaboration.</p>
   </article>
  </div>
  <div class="bridge-out">
   <p>The supporting work below shows where these habits were developed: student leadership, concert production, media making, venue programmes and visual storytelling.</p>
   <span>Case studies → transferable practice</span>
  </div>`;

 support.before(section);
})();
