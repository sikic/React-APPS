import Layout from '../components/layouts/Layout'
import Styled from '@emotion/styled'

const Heading = Styled.h1`
  color:red;
`;
export default function Populares() {
  return (

    <div className="container">
      <Layout>
        <h1>Populares</h1>
      </Layout>
    </div>
  )
}
