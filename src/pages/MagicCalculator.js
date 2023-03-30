import Calculator from '../components/Calculator/Calculator';

const MagicCalculator = () => (
  <div className="magicCalculator">
    <div className="calcInfo">
      <h2>Let&apos;s do some math!</h2>
      <p>
        Here at Math Magicians, we believe that everyone should have access to a reliable and
        easy-to-use calculator. That&apos;s why we&apos;ve embedded a basic calculator on this
        page that you can use to perform simple or complex calculations, no matter where you are.
      </p>
      <p>
        Our calculator is user-friendly and intuitive, making it perfect for students, teachers,
        and anyone who needs to crunch numbers on a regular basis. With its simple interface
        and versatile functionality, you can use our calculator for a wide range of
        applications.
      </p>
      <p>
        So go ahead and give our calculator a try! We&apos;re confident that you&apos;ll find it
        to be a valuable tool in your mathematical arsenal.
      </p>
    </div>
    <Calculator />
  </div>
);

export default MagicCalculator;
