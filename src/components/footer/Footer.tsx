import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <footer
      className="
    bg-indigo-900
    text-white
    py-9
    p-4
    flex
    justify-center
">
      <div className="
      container
      flex
      flex-row
      justify-center
      ">
        <div className="
        flex
        flex-col
        justify-center
        items-center
        ">
          <h3 className='font-bold'
          >
            Fernando Cassio | Copyright: {data}
          </h3>
          <p>Me siga nas redes sociais</p>

          <div className="flex flex-row">
          <a target="_blank" href="https://github.com/fernandocassiodev">
            <GithubLogo size={32} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/fernando-cassio/">
            <LinkedinLogo size={32} />
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
