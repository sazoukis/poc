<?php

error_reporting(0);

$GLOBALS['doNotCheckSuspectLevel'] = true;

include($_SERVER['DOCUMENT_ROOT'].'/weblication/grid.php');

if(wUserCur::getType() != 'admin'){
  header('HTTP/1.1 403 Forbidden');
  header('Status: 403 Forbidden');  
  exit;
}

$action  = wRequest::getParameter('action', 'alphanum');
$php     = wRequest::getParameter('php');

if($action == 'execute'){
  wRequest::checkCsrfToken();
  if(wRequest::getMethod() !== 'POST'){
    if(!headers_sent()){
      header('HTTP/1.1 403 Forbidden');
      header('Status: 403 Forbidden');
    }
    print 'Security Error: Invalid request!';
    exit;
  }
  print wMain::executePHP($php);
  exit;
}

$pathesScripts = array();

$projects = wApplication::getDataProjects('global');
foreach($projects as $project){
  if(wRepository::documentExists($project['path'].'/wGlobal/scripts/php/wMyProject.php')){
    $pathesScripts[] = $project['path'].'/wGlobal/scripts/php/wMyProject.php';
  }
}

$pathLastScript = '/weblication/grid5/cache/sandbox/last_'.wSession::getUserName().'.php';
$lastScript     = '';
if(wRepository::documentExists($pathLastScript)){
  $lastScript = preg_replace('/^<\?php exit; \?>\n/', '', wReadWrite::readFile($pathLastScript));
}

$xmlStr  = '<wMask>';
$xmlStr .= '  <wData>';
$xmlStr .= '    <data name="user">'.wSession::getUserName().'</data>';
$xmlStr .= '    <data name="scriptsToInclude">'.implode(',', $pathesScripts).'</data>';
$xmlStr .= '    <data name="lastScript">'.htmlspecialchars($lastScript).'</data>';
$xmlStr .= '  </wData>';
$xmlStr .= '</wMask>';

print wTools::generateMaskTool($xmlStr);

class wMain {

  public static function executePHP($phpStr){
    
    wRepository::createDir('/weblication/grid5/cache/sandbox');
    wReadWrite::writeFile('/weblication/grid5/cache/sandbox/last_'.wSession::getUserName().'.php', "<?php exit; ?>\n".$phpStr);

    $hasTags = preg_match('/^\s*\<\?php/', $phpStr) == 1;
    $phpStr = ($hasTags === false ? $phpStr : '?'.'>'.$phpStr);
    eval($phpStr);
  }
}

