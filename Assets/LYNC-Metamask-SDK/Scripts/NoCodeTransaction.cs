using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using TMPro;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Collections;
using LYNC_WalletSDK;

public class NoCodeTransaction : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI WalletText;
    [SerializeField] private Button sendTransactionButton;
    [SerializeField] private GameObject LoadingScreen;
    [SerializeField] private TextMeshProUGUI TransactionHash;
    [SerializeField] private string contractAddress;
    [SerializeField] private string ABI;
    [SerializeField] private string functionName;
    [SerializeField] private string cost;
    [SerializeField] private string[] Arguments = new string[] { };

    void Awake()
    {
        string walletAddress = PlayerPrefs.GetString("WalletAddress");
        WalletText.text = walletAddress.Substring(0, 7) + "..."+walletAddress.Substring(37);
        LoadingScreen.gameObject.SetActive(false);
    }

    private void Start() {
    // ******************* 721 *******************
        sendTransactionButton.onClick.AddListener(() =>
        {
            sendTransactionButton.interactable = false;
            string args = JsonConvert.SerializeObject(Arguments);
            TransactionManager.Instance.SendTransaction(LoadingScreen, contractAddress, ABI, functionName, args, cost, OnTransactionCompleted, OnTransactionFailed);
        });
    }

    private void OnTransactionCompleted(string response)
    {
        TransactionHash.text = "Transaction Hash:-" +response;
        ToastManager.Instance.Show("Transaction Done!!", ToastType.Success);
        Debug.Log("Transaction Successful!!");
        sendTransactionButton.interactable = true;
    }
    private void OnTransactionFailed(string res)
    {
        ToastManager.Instance.Show("Transaction Failed!!", ToastType.Error);
        Debug.Log("Transaction Failed!! " + res);
        sendTransactionButton.interactable = true;
    }
    public void CopyTransactionHash()
    {
        TransactionManager.Instance.CopyText(TransactionHash.text);
    }
}