export default function Features() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid gap-5 md:grid-cols-3 md:gap-16">
            {/* Item */}
            <div>
              <div className="flex items-center mb-2">
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                >
                  <path
                    className="fill-blue-500"
                    fillRule="nonzero"
                    d="m15.872.648 1.536 1.28-11.34 13.61-5.482-5.482L2 8.642l3.933 3.933L15.872.648Zm6 0 1.536 1.28-11.34 13.61-2.482-2.482L11 11.642l.933.933L21.872.648Z"
                  />
                </svg>
                <div className="text-lg font-extrabold font-hkgrotesk text-slate-800">
                  Rejoins une communauté
                </div>
              </div>
              <div className="text-slate-500">
                Sur le Discord on s'entraide entre développeurs. Non seulement à
                monter en compétences, mais aussi à créer des projets
                entrainants.
              </div>
            </div>
            {/* Item */}
            <div>
              <div className="flex items-center mb-2">
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                >
                  <path
                    className="fill-blue-500"
                    fillRule="nonzero"
                    d="m15.872.648 1.536 1.28-11.34 13.61-5.482-5.482L2 8.642l3.933 3.933L15.872.648Zm6 0 1.536 1.28-11.34 13.61-2.482-2.482L11 11.642l.933.933L21.872.648Z"
                  />
                </svg>
                <div className="text-lg font-extrabold font-hkgrotesk text-slate-800">
                  Motivation au max
                </div>
              </div>
              <div className="text-slate-500">
                Ce podcast est là pour te faire passer un bon moment, mais
                surtout te motiver à fond ! Mon but, c'est que tu te lances dans
                l'inconnu et que, une fois fait, tu puisses aussi passer dans
                mon podcast !
              </div>
            </div>
            {/* Item */}
            <div>
              <div className="flex items-center mb-2">
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                >
                  <path
                    className="fill-blue-500"
                    fillRule="nonzero"
                    d="m15.872.648 1.536 1.28-11.34 13.61-5.482-5.482L2 8.642l3.933 3.933L15.872.648Zm6 0 1.536 1.28-11.34 13.61-2.482-2.482L11 11.642l.933.933L21.872.648Z"
                  />
                </svg>
                <div className="text-lg font-extrabold font-hkgrotesk text-slate-800">
                  Nouvel épisode tous les mois !
                </div>
              </div>
              <div className="text-slate-500">
                C'est un podcast chill réalisé à coté de mon activité
                principale. Je compte faire un épisode tous les mois ou tous les
                deux mois, suivant mes disponibilités !
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
