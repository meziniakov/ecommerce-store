import Container from '@/components/ui/container'
import Billboard from '@/components/Billboard'
import getBillboards from '@/actions/get-billboards'

export const revalidate = 0

const HomePage = async () => {
  const billboards = await getBillboards()

  return <Container>
    <div className="space-y-10 pb-10">
      <Billboard data={{}}/>
    </div>
    </Container>;
};
export default HomePage;
