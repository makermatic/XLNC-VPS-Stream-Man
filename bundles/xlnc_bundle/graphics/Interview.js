const caster = document.getElementById('caster');
const interviewee = document.getElementById('interviewee');

nodecg.listenFor('updateInfo', (data) => {
    caster.innerHTML = data.caster
    interviewee.innerHTML = data.name
})