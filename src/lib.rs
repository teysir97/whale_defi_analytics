use solana_program::{
    account_info::{AccountInfo, next_account_info}, 
    declare_id, entrypoint, entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};


declare_id!("FcjF6Yc7LJE8ocUR7kZKyT9srbCARvtmPg58yKQLmaF9");

entrypoint!(process_instruction);

fn process_instruction(
    _program_id: &Pubkey, 
    accounts: &[AccountInfo],
    _instruction_data: &[u8], 
) -> ProgramResult {
    let _ = _program_id;
    let _ = _program_id;
    msg!("Whales DeFi Analytics Programı çalışıyor.");

    let accounts_iter = &mut accounts.iter();
    let account = next_account_info(accounts_iter)?;

   
    let whale_threshold: u64 = 1_000_000_000; // SOL'da

    if **account.lamports.borrow() > whale_threshold {
        msg!("Whale hesabı tespit edildi: {}", account.key);
       
    }

    Ok(())
}
