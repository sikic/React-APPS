import Layout from '../components/layouts/Layout'
import Styled from '@emotion/styled'

const Heading = Styled.h1`
  color:red;
`;
export default function NuevoProducto() {
  return (

    <div className="container">
      <Layout>
        <h1>NuevoProducto</h1>
      </Layout>
    </div>
  )
}
