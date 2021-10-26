import { schedule } from "../src/mocks";
import { priorities } from "./mocks.js";

function materiaScheduler(subjectPriorities, userSubjects) {
  let qtd = 0;

  let subjectGroup = [[], [], [], [], [], []];

  let subjectAdded = false;

  for (const subjectPriorityGroup in subjectPriorities) {
    for (const subject in subjectPriorities[subjectPriorityGroup]) {
      subjectAdded = false;
      for (const subjectTime in schedule[
        subjectPriorities[subjectPriorityGroup][subject].subject.value
      ]) {
        let ocupado = false;

        for (const horario in schedule[
          subjectPriorities[subjectPriorityGroup][subject].subject.value
        ][subjectTime].colunas) {
          let coluna =
            schedule[
              subjectPriorities[subjectPriorityGroup][subject].subject.value
            ][subjectTime].colunas[horario];
          let linha =
            schedule[
              subjectPriorities[subjectPriorityGroup][subject].subject.value
            ][subjectTime].linhas[horario];

          if (subjectGroup[coluna][linha] != null) {
            ocupado = true;
          }
        }

        console.log(
          "IS LOCKED",
          isLocked(
            subjectPriorities[subjectPriorityGroup][subject].subject.value,
            userSubjects
          )
        );

        if (
          !ocupado &&
          !subjectAdded &&
          !isLocked(
            subjectPriorities[subjectPriorityGroup][subject].subject.value,
            userSubjects
          )
        ) {
          for (const horario in schedule[
            subjectPriorities[subjectPriorityGroup][subject].subject.value
          ][subjectTime].colunas) {
            let coluna =
              schedule[
                subjectPriorities[subjectPriorityGroup][subject].subject.value
              ][subjectTime].colunas[horario];
            let linha =
              schedule[
                subjectPriorities[subjectPriorityGroup][subject].subject.value
              ][subjectTime].linhas[horario];

            subjectGroup[coluna][linha] =
              subjectPriorities[subjectPriorityGroup][subject].subject.value;
            subjectAdded = true;
          }
          qtd++;
        }

        if (qtd >= 6) {
          return subjectGroup;
        }
      }
    }
  }

  console.log("END");

  return subjectGroup;
}

function isLocked(subject, userSubjects) {
  for (const prioritySubject in priorities) {
    for (const locked in priorities[prioritySubject]) {
      console.log(
        priorities[prioritySubject][locked],
        subject,
        subject == priorities[prioritySubject][locked]
      );
      if (
        subject == priorities[prioritySubject][locked] &&
        !userSubjects[prioritySubject]
      ) {
        return true;
      }
    }
  }

  return false;
}

//elems with priority 7 comes first
function sortPriorites(subjectPriorities) {
  let arraytop = [[], [], [], [], [], [], []];

  for (const subject in subjectPriorities) {
    arraytop[7 - subjectPriorities[subject].priority].push(
      subjectPriorities[subject]
    );
  }

  return arraytop;
}

export { materiaScheduler, sortPriorites };
