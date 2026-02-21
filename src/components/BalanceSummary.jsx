function BalanceSummary() {
  return (
    <div className="balance-container">
      
      <div>
        <h2 className="small-rectangle" 
        style={{ backgroundColor: '#28A745' }}>
          Total income : ₦45,000
        </h2>
      </div>

      <div>
        <h2 className="small-rectangle" 
        style={{ backgroundColor: '#DC3545' }}>
          Total expenses : ₦18,000
        </h2>
      </div>

      <div>
        <h2 className="small-rectangle" 
        style={{ backgroundColor: '#6C757D' }}>
          Balance: ₦27,000
        </h2>
      </div>

    </div>
  );
}

export default BalanceSummary;
