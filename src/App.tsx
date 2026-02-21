/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Users, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  BarChart3,
  BookOpen,
  MessageSquare,
  Search,
  ArrowRightLeft,
  LayoutList
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-btp-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10" />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 inline-block"
          >
            <div className="flex items-center justify-center">
              <div className="border-l-8 border-b-8 border-btp-orange p-4 md:p-8">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">BTP²</h1>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            L’IA au service de <br />
            <span className="text-btp-orange italic">l’intelligence de terrain</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12"
          >
            Formation et accompagnement IA pour les entreprises du BTP
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="bg-btp-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              Échangeons 30 minutes <ChevronRight size={20} />
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-sm text-slate-400">
          <span className="flex items-center gap-2"><Mail size={16} /> pierre.ropars@btp2.fr</span>
          <span className="flex items-center gap-2"><Phone size={16} /> 07 85 20 47 23</span>
          <span className="flex items-center gap-2"><MapPin size={16} /> Finistère</span>
        </div>
      </header>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn}>
            <div className="accent-line" />
            <h2 className="section-title">Ce que disent les entreprises du BTP</h2>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl">
              Les dirigeants et directeurs travaux nous remontent les mêmes difficultés au quotidien :
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Clock className="text-btp-orange" />, text: "Temps administratif qui empiète sur le terrain : comptes rendus, relances, devis" },
              { icon: <ArrowRightLeft className="text-btp-orange" />, text: "Perte d'information entre chantiers : savoir-faire non capitalisé, erreurs répétées" },
              { icon: <Users className="text-btp-orange" />, text: "Difficulté à transmettre l'expérience aux jeunes recrues de manière structurée" },
              { icon: <LayoutList className="text-btp-orange" />, text: "Multiplicité des outils numériques sans cohérence d'ensemble" },
              { icon: <Zap className="text-btp-orange" />, text: "Méfiance vis-à-vis des solutions \"clés en main\" déconnectées du métier réel" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="shrink-0 mt-1">{item.icon}</div>
                <p className="font-medium text-slate-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {[
              { 
                quote: "On a testé plusieurs, mais on ne sait pas quoi prioriser", 
                desc: "ChatGPT, Copilot, applications chantier... Chaque conducteur utilise un outil différent. Les données sont éclatées. Les mémoires techniques sont refaites à chaque fois.",
                solution: "On simplifie. On crée un écosystème qui tient."
              },
              { 
                quote: "J’utilise l’IA, mais mon équipe perd plus de temps à l’utiliser", 
                desc: "Vous maîtrisez l'IA pour vos propres tâches. Mais vos conducteurs et chefs de chantier décrochent : l'outil fait trop d'erreurs, ils n'ont pas confiance.",
                solution: "On accélère. On déploie à l’échelle de votre entreprise."
              },
              { 
                quote: "L’IA, c’est pas pour nous", 
                desc: "Vous savez dicter un message vocal ? Vous savez déjà utiliser l'IA. Votre conducteur rentre du chantier à 18h et passe encore 2h sur son PPSPS.",
                solution: "On vulgarise. On vous montre sur vos documents."
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                className="p-8 rounded-2xl border-l-8 border-btp-orange bg-slate-50 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-btp-blue italic">« {item.quote} »</h3>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <p className="font-bold text-btp-orange uppercase tracking-wider text-sm">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-btp-blue text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn}>
            <div className="accent-line" />
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Ce que l’IA change concrètement</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-6 px-4 font-bold uppercase text-sm text-btp-orange">Cas d'usage</th>
                  <th className="py-6 px-4 font-bold uppercase text-sm opacity-60">AVANT (sans IA)</th>
                  <th className="py-6 px-4 font-bold uppercase text-sm text-emerald-400">APRÈS (avec IA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { 
                    title: "Préparer un PPSPS", 
                    before: "On repart d'un ancien document, on change le nom. Corvée administrative qui ne reflète pas les risques réels.",
                    after: "L'IA génère une trame adaptée aux risques spécifiques décrits. Il ne reste qu'à signer."
                  },
                  { 
                    title: "Rédiger un mode opératoire", 
                    before: "Le mode opératoire n'existe pas ou est obsolète. Consignes transmises uniquement à l'oral.",
                    after: "L'IA rédige un mode opératoire complet avec étapes et points de contrôle, prêt à imprimer."
                  },
                  { 
                    title: "Rédiger un devis détaillé", 
                    before: "Rédaction le soir à partir de notes éparses. Risque d'oubli de postes ou prix non actualisés.",
                    after: "L'IA structure un devis détaillé par lot à partir de notes de métré. Gain de temps massif."
                  },
                  { 
                    title: "Exploiter les pièces marché", 
                    before: "Lecture intégrale fastidieuse du CCTP/CCAP. Chaque conducteur surligne à sa manière.",
                    after: "L'IA extrait les obligations par lot et produit une fiche de synthèse structurée."
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-8 px-4 font-bold align-top w-1/4">{row.title}</td>
                    <td className="py-8 px-4 text-slate-400 align-top w-3/8">{row.before}</td>
                    <td className="py-8 px-4 text-emerald-300 align-top w-3/8">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div {...fadeIn} className="mt-16 p-8 bg-white/10 rounded-2xl text-center">
            <p className="text-2xl font-bold">
              L'IA vous libère du temps pour ce que vous faites le mieux : <span className="text-btp-orange">le terrain.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <div className="absolute -inset-4 border-4 border-btp-orange rounded-2xl -z-10 translate-x-8 translate-y-8" />
                <img 
                  src="https://picsum.photos/seed/btp2-pierre/600/800" 
                  alt="Pierre Ropars" 
                  className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="accent-line" />
              <h2 className="section-title mb-2">Qui est derrière BTP² ?</h2>
              <h3 className="text-2xl font-bold text-btp-orange mb-6">Pierre Ropars, Fondateur</h3>
              
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Fort de plus de <strong>6 années d’expérience</strong> en tant que conducteur de travaux chez <strong>Colas</strong>, leader français des infrastructures, et diplômé de l’<strong>ESTP</strong>.
                </p>
                <p>
                  Depuis deux ans, Pierre anime des formations sur l’IA et la conduite du changement en entreprise pour des sociétés du BTP, de l’immobilier et de tout horizon.
                </p>
                <p>
                  Également enseignant en école, Pierre apporte une approche où <strong>l’IA est au service du bon sens et de l’humain.</strong>
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "L’IA est un outil, pas une fin en soi",
                  "On part de vos documents, vos processus",
                  "Progressivité et sécurité",
                  "Autonomie, pas dépendance",
                  "Ancrage local Finistère"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-btp-orange shrink-0" />
                    <span className="font-bold text-btp-blue">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="accent-line mx-auto" />
            <h2 className="section-title">Notre méthode en 5 étapes</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              BTP² propose des interventions modulables, adaptées à la taille de votre structure et à votre niveau de maturité numérique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Workshop", desc: "Vulgarisation de l'IA, démonstrations concrètes sur des cas d'usage du BTP.", result: "Vous comprenez ce que l'IA peut faire." },
              { step: 2, title: "Conseil", desc: "Entretiens pour identifier des cas d'usage personnalisés et les irritants.", result: "Feuille de route IA sur 6 à 18 mois." },
              { step: 3, title: "Formation", desc: "Formation présentiel dans vos locaux sur vos documents et processus réels.", result: "Gains de productivité concrets." },
              { step: 4, title: "Suivi", desc: "Accompagnement mensuel, coaching de groupe et veille technologique.", result: "Équipe accompagnée dans le changement." },
              { step: 5, title: "Dév & Auto", desc: "Mise en place d'assistants IA sur mesure et tableaux de bord.", result: "Organisation fluidifiée." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="w-10 h-10 bg-btp-blue text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3 text-btp-blue">{item.title}</h4>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-btp-orange uppercase tracking-wider">Résultat</p>
                  <p className="text-slate-700 text-sm font-medium">{item.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p {...fadeIn} className="mt-12 text-center text-slate-500 italic">
            La méthode n’est pas rigide et linéaire. Nous commençons à l’étape qui correspond à votre besoin.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-btp-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
            <path d="M0 100 L100 100 L100 0 Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Échangeons 30 minutes</h2>
              <p className="text-xl text-slate-300">
                Un premier échange sans engagement pour clarifier vos besoins et identifier vos cas d'usage prioritaires.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn} className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-btp-orange rounded-2xl flex items-center justify-center">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">Email</p>
                    <p className="text-xl font-bold">pierre.ropars@btp2.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-btp-orange rounded-2xl flex items-center justify-center">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">Téléphone</p>
                    <p className="text-xl font-bold">07 85 20 47 23</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-btp-orange rounded-2xl flex items-center justify-center">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">Localisation</p>
                    <p className="text-xl font-bold">Finistère, Bretagne</p>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                <h4 className="text-2xl font-bold mb-6">C’est pour vous si…</h4>
                <ul className="space-y-4">
                  {[
                    "Vous passez trop de temps sur l'administratif",
                    "Le savoir-faire de vos anciens n'est pas documenté",
                    "Vous perdez des appels d'offres face à des concurrents mieux organisés",
                    "Vous voulez déployer l'IA à l'ensemble de vos équipes"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-btp-orange shrink-0 mt-1" size={18} />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-slate-400 mb-4">Retrouvez-moi sur LinkedIn</p>
                  <div className="w-32 h-32 bg-white p-2 mx-auto rounded-xl">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/pierre-ropars/" 
                      alt="LinkedIn QR Code" 
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-btp-blue border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} BTP² - L’IA au service de l’intelligence de terrain. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
