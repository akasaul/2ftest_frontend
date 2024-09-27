interface Props {
  children: React.ReactNode;
}

const OwnerLayout = ({ children }: Props) => {
  return (
    <div>
      <p>Owner layout</p>
      {children}
    </div>
  );
};

export default OwnerLayout;
