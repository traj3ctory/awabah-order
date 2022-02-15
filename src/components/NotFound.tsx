import notFound from '../assets/404.gif'
/**
* @author traj3ctory
* @function NotFound
**/
const NotFound = () => (
  <div>
    <section className="not_found">
      <img src={notFound} alt="notfound" className="img-fluid" />
    </section>
  </div>
)

export default NotFound;